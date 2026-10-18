"""Empaqueta la edición local, con tus documentos cifrados, en un APK para Android.

Todo lo generado queda en .local/android/ (ignorado por Git). El APK lleva los
documentos tal como están en .local/paths.json; no lo compartas ni lo publiques.
Requiere un JDK y el SDK de Android (platforms;android-34, build-tools;34.0.0) en
RUTA_ANDROID_HOME, por defecto ~/.ruta-android con subcarpetas jdk/ y sdk/.
"""
import importlib.util
import json
import os
import re
import secrets
import shutil
import subprocess
import sys
import tempfile
import time
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LOCAL = ROOT / '.local'
OUT = LOCAL / 'android'
SRC = ROOT / 'android'
HOME = Path(os.environ.get('RUTA_ANDROID_HOME', Path.home() / '.ruta-android'))
EXE = '.exe' if os.name == 'nt' else ''
BAT = '.bat' if os.name == 'nt' else ''

# Las descargas blob: no funcionan en WebView: se entregan al puente nativo.
DOWNLOAD_SHIM = """<script>(function(){var click=HTMLAnchorElement.prototype.click;
HTMLAnchorElement.prototype.click=function(){var a=this;if(a.download&&/^blob:/.test(a.href)&&window.RutaAndroid){
fetch(a.href).then(function(r){return r.blob()}).then(function(b){var f=new FileReader();f.onload=function(){
RutaAndroid.save(a.download,b.type||'application/octet-stream',String(f.result).split(',')[1]||'')};f.readAsDataURL(b)});return}
return click.call(this)}})();</script>"""


def tool(*parts):
    path = HOME.joinpath(*parts)
    if not path.exists():
        sys.exit(f'Falta {path}. Instala el JDK y el SDK de Android en {HOME} (ver README).')
    return str(path)


def run(*args):
    subprocess.run([str(a) for a in args], check=True)


def local_html():
    spec = importlib.util.spec_from_file_location('serve_local', ROOT / 'tools' / 'serve_local.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    html = module.local_html()
    return html.replace('<script>window.RUTA_LOCAL=true;</script>',
                        '<script>window.RUTA_LOCAL=true;</script>' + DOWNLOAD_SHIM, 1)


def stage(www):
    www.mkdir(parents=True)
    (www / 'index.html').write_text(local_html(), encoding='utf-8')
    for directory in ('assets', 'resumenes'):
        shutil.copytree(ROOT / directory, www / directory)
    config = json.loads((LOCAL / 'paths.json').read_text(encoding='utf-8'))
    resolve = lambda v: Path(v).expanduser() if Path(v).expanduser().is_absolute() else LOCAL / v
    private = www / '__local__'
    (private / 'pdf').mkdir(parents=True)
    files = {k: v for k, v in config.get('files', {}).items() if re.fullmatch(r'[A-Za-z0-9_-]+', k)}
    for key, entry in files.items():
        shutil.copy2(resolve(entry['path']), private / 'pdf' / key)
    manifest = {'files': {k: '/__local__/pdf/' + k for k in files},
                'plain': [k for k, v in files.items() if not v.get('encrypted', False)]}
    (private / 'manifest.json').write_text(json.dumps(manifest), encoding='utf-8')
    if config.get('check'):
        shutil.copy2(resolve(config['check']), private / 'check')
    return len(files)


def keystore(java_bin):
    store, secret_file = OUT / 'ruta.keystore', OUT / 'keystore-clave.txt'
    if not store.exists():
        secret_file.write_text(secrets.token_urlsafe(24), encoding='utf-8')
        run(java_bin / ('keytool' + EXE), '-genkeypair', '-keystore', store, '-alias', 'ruta',
            '-keyalg', 'RSA', '-keysize', '2048', '-validity', '10000',
            '-storepass', secret_file.read_text(encoding='utf-8'),
            '-dname', 'CN=Ruta Bergson')
    return store, secret_file.read_text(encoding='utf-8').strip()


def main():
    jdk = next((p for p in (HOME / 'jdk').glob('*') if (p / 'bin').is_dir()), None)
    if not jdk:
        sys.exit(f'Falta el JDK en {HOME / "jdk"}.')
    java_bin = jdk / 'bin'
    os.environ['JAVA_HOME'] = str(jdk)
    tools = Path(tool('sdk', 'build-tools', '34.0.0'))
    android_jar = tool('sdk', 'platforms', 'android-34', 'android.jar')

    OUT.mkdir(parents=True, exist_ok=True)
    # Se arma fuera de Dropbox para no sincronizar ni bloquear los intermedios.
    build = Path(tempfile.mkdtemp(prefix='ruta-apk-'))
    try:
        final, count = assemble(build, java_bin, tools, android_jar)
    finally:
        shutil.rmtree(build, ignore_errors=True)
    size = final.stat().st_size / 2**20
    print(f'APK listo: {final} ({size:.0f} MB, {count} documentos cifrados). No lo publiques.')


def assemble(BUILD, java_bin, tools, android_jar):
    count = stage(BUILD / 'assets' / 'www')

    res = BUILD / 'res.zip'
    run(tools / ('aapt2' + EXE), 'compile', '--dir', SRC / 'res', '-o', res)
    unsigned = BUILD / 'unsigned.apk'
    version = int(time.time() // 60)
    run(tools / ('aapt2' + EXE), 'link', '-o', unsigned, '-I', android_jar,
        '--manifest', SRC / 'AndroidManifest.xml', '-A', BUILD / 'assets', '--java', BUILD / 'gen',
        '--min-sdk-version', '24', '--target-sdk-version', '34',
        '--version-code', version, '--version-name', time.strftime('%Y.%m.%d'), res)

    classes = BUILD / 'classes'
    sources = [str(p) for p in (SRC / 'src').rglob('*.java')] + [str(p) for p in (BUILD / 'gen').rglob('*.java')]
    run(java_bin / ('javac' + EXE), '-source', '1.8', '-target', '1.8', '-nowarn', '-Xlint:-options',
        '-bootclasspath', android_jar, '-d', classes, *sources)
    dex = BUILD / 'dex'
    dex.mkdir()
    run(tools / ('d8' + BAT), '--release', '--min-api', '24', '--lib', android_jar, '--output', dex,
        *[str(p) for p in classes.rglob('*.class')])
    with zipfile.ZipFile(unsigned, 'a') as apk:
        apk.write(dex / 'classes.dex', 'classes.dex')

    aligned = BUILD / 'aligned.apk'
    run(tools / ('zipalign' + EXE), '-f', '-p', '4', unsigned, aligned)
    store, password = keystore(java_bin)
    final = OUT / 'RutaBergson.apk'
    run(tools / ('apksigner' + BAT), 'sign', '--ks', store, '--ks-pass', 'pass:' + password,
        '--out', final, aligned)
    return final, count


if __name__ == '__main__':
    main()
