"""Servidor de lectura personal: solo loopback, rutas explícitas y sin listados."""
import argparse
import json
import mimetypes
import re
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
LOCAL = ROOT / '.local'

def local_html():
    source = (ROOT / 'index.html').read_text(encoding='utf-8')
    return (source.replace('<!-- EDITION_MODE -->', '<script>window.RUTA_LOCAL=true;</script>')
            .replace('<!-- LOCAL_VIEWER -->', (ROOT / 'config/viewer.local.html').read_text(encoding='utf-8'))
            .replace('<!-- LOCAL_READER -->', '<script type="module" src="assets/lector.js"></script>'))

def configuration():
    path = LOCAL / 'paths.json'
    return json.loads(path.read_text(encoding='utf-8')) if path.exists() else {'files': {}}

def resolve_private(value):
    p = Path(value).expanduser()
    return p.resolve() if p.is_absolute() else (LOCAL / p).resolve()

class Handler(BaseHTTPRequestHandler):
    def log_message(self, *args):
        pass  # No registrar nombres ni rutas personales.

    def reply(self, data, kind='application/octet-stream', status=200):
        self.send_response(status)
        self.send_header('Content-Type', kind)
        self.send_header('Content-Length', str(len(data)))
        self.send_header('Cache-Control', 'no-store')
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('Cross-Origin-Resource-Policy', 'same-origin')
        self.end_headers()
        if self.command != 'HEAD':
            self.wfile.write(data)

    def do_HEAD(self):
        self.do_GET()

    def do_GET(self):
        port = self.server.server_port
        if self.headers.get('Host') not in {f'127.0.0.1:{port}', f'localhost:{port}'}:
            return self.reply(b'Forbidden', status=403)
        origin = self.headers.get('Origin')
        if origin and origin not in {f'http://127.0.0.1:{port}', f'http://localhost:{port}'}:
            return self.reply(b'Forbidden', status=403)
        if self.headers.get('Sec-Fetch-Site') == 'cross-site':
            return self.reply(b'Forbidden', status=403)
        path = unquote(urlsplit(self.path).path)
        try:
            if path in ('/', '/local.html', '/index.html'):
                return self.reply(local_html().encode(), 'text/html; charset=utf-8')
            if path == '/public.html':
                return self.reply((ROOT / 'index.html').read_bytes(), 'text/html; charset=utf-8')
            config = configuration() if path.startswith('/__local__/') else {}
            if path == '/__local__/manifest':
                entries = config.get('files', {})
                valid = {k:v for k,v in entries.items() if re.fullmatch(r'[A-Za-z0-9_-]+', k)}
                data = {'files': {k:'/__local__/pdf/'+k for k in valid},
                        'plain': [k for k,v in valid.items() if not v.get('encrypted', False)]}
                return self.reply(json.dumps(data).encode(), 'application/json')
            if path == '/__local__/check':
                check = config.get('check')
                return self.reply(resolve_private(check).read_bytes()) if check else self.reply(b'', status=204)
            if path.startswith('/__local__/pdf/'):
                key = path.removeprefix('/__local__/pdf/')
                entry = config.get('files', {}).get(key)
                if not entry:
                    return self.reply(b'Not found', status=404)
                return self.reply(resolve_private(entry['path']).read_bytes())
            relative = Path(path.lstrip('/'))
            target = (ROOT / relative).resolve()
            if (not target.is_relative_to(ROOT) or any(p.startswith('.') for p in relative.parts)
                    or not relative.parts or relative.parts[0] not in {'assets','resumenes'}
                    or target.suffix.lower() not in {'.js','.mjs','.css','.svg','.jpg','.png','.md','.wasm','.bcmap','.pfb','.ttf'}
                    or not target.is_file()):
                return self.reply(b'Not found', status=404)
            kind = 'text/javascript' if target.suffix in {'.js','.mjs'} else mimetypes.guess_type(target.name)[0]
            return self.reply(target.read_bytes(), kind or 'application/octet-stream')
        except (OSError, ValueError, KeyError, TypeError):
            return self.reply(b'Archivo local no disponible. Revisa la configuracion en tu equipo.', status=404)

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=8765)
    args = parser.parse_args()
    LOCAL.mkdir(exist_ok=True)
    (LOCAL / 'index.html').write_text(local_html(), encoding='utf-8')
    server = ThreadingHTTPServer(('127.0.0.1', args.port), Handler)
    print(f'Con PDF: http://127.0.0.1:{args.port}/local.html', flush=True)
    print(f'Sin PDF: http://127.0.0.1:{args.port}/public.html', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
