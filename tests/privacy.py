import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
tracked = subprocess.check_output(['git','ls-files','-z'], cwd=ROOT).decode().split('\0')
bad = []
for name in filter(None, tracked):
    p = Path(name)
    if (p.suffix.lower() in {'.pdf','.bin','.ruta-pdf','.zip'} or
        p.parts[0] in {'.local','pdf','pdfs','pdf-cifrados','private'} or
        p.name in {'paths.json','source-map.json','private-map.json','vault-manifest.json'}):
        bad.append(name)
    if p.suffix in {'.html','.js','.json','.md','.svg'} and 'vendor' not in p.parts:
        text = (ROOT / p).read_text(encoding='utf-8')
        if re.search(r'dropbox\.com|/workspace/|C:\\\\Users\\\\|153' + '314', text, re.I):
            bad.append(name + ': dato privado')
assert not bad, bad
for rel in ['.local/paths.json','.local/documents/test.pdf','pdf/test.pdf','file.ruta-pdf']:
    assert subprocess.run(['git','check-ignore','-q',rel],cwd=ROOT).returncode == 0, rel
subprocess.run([sys.executable,'tools/build_public.py'], cwd=ROOT, check=True)
for p in (ROOT/'dist/public').rglob('*'):
    assert not p.is_symlink()
    assert p.suffix.lower() not in {'.pdf','.bin','.ruta-pdf','.json'}, p
    assert p.name not in {'lector.js','vault-crypto.mjs','paths.json'}, p
print('PASS: sin documentos o datos privados versionados; exclusiones y exportación pública verificadas.')
