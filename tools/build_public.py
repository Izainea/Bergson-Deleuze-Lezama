"""Exporta únicamente la edición pública mediante una lista de inclusión."""
from pathlib import Path
import shutil
import time

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / 'dist' / 'public'
for attempt in range(10):
    try:
        if DEST.exists():
            shutil.rmtree(DEST)
        break
    except PermissionError:
        time.sleep(1)  # Dropbox u otro programa puede retener la carpeta un instante.
else:
    shutil.rmtree(DEST)
DEST.mkdir(parents=True)
shutil.copy2(ROOT / 'index.html', DEST / 'index.html')
for directory in ('assets', 'resumenes'):
    for source in (ROOT / directory).rglob('*'):
        if not source.is_file():
            continue
        rel = source.relative_to(ROOT)
        if 'vendor' in rel.parts or source.name in {'lector.js','vault-crypto.mjs'}:
            continue
        if source.suffix.lower() not in {'.js','.css','.svg','.jpg','.png','.md'}:
            continue
        target = DEST / rel
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)
(DEST / '.nojekyll').touch()
print('Edición pública preparada en dist/public: sin documentos ni configuración local.')
