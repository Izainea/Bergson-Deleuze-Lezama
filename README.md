# Bergson · Deleuze · Lezama

Ruta de doce estaciones, atlas de ocho diagramas, bibliografía y notas personales.

## Dos ediciones

- **Pública, sin PDF:** `index.html`. Conserva la ruta, las referencias y los gráficos. No ofrece archivos de libros ni consulta configuraciones locales.
- **Local, con lector PDF:** ejecutar `python tools/serve_local.py` desde esta carpeta y abrir `http://127.0.0.1:8765/local.html`. En Windows se puede usar `Abrir-local.cmd` con Python instalado. El servidor genera `.local/index.html` y solo escucha en tu equipo. `http://127.0.0.1:8765/public.html` permite comparar la edición pública.

El lector requiere este servidor local; no se inicia haciendo doble clic en el HTML. PDF.js está incluido y no depende de un visor remoto.

## Configurar documentos en tu equipo

Copia `config/paths.example.json` a `.local/paths.json`. Guarda tus documentos en `.local/documents/` o indica rutas absolutas de tu equipo en ese JSON. Cada entrada asocia una referencia bibliográfica, como `berg`, con `path` y `encrypted`. Las rutas relativas se resuelven desde `.local/`. En Windows usa barras `/` o escapa las barras invertidas en JSON.

Los PDF normales usan `encrypted: false`. El formato cifrado compatible usa `encrypted: true` y puede tener una entrada `check` con el archivo de comprobación. Esos archivos y la configuración permanecen exclusivamente en `.local/`, ignorados por Git. No escribas contraseñas en el código ni en el JSON.

El lector solicita una clave de sesión para los archivos cifrados y para guardar nuevos ejemplares cifrados en el navegador. También admite seleccionar un PDF mediante **Mis PDF** sin configurar rutas. En una instalación nueva sin comprobación, eliges la clave al comenzar; usa la misma para recuperar los ejemplares guardados. Los archivos originales que hayas añadido conservan su protección original. El cifrado del navegador no convierte esos originales en archivos cifrados.

El lector permite páginas, zoom, pantalla completa, exportar/importar copias cifradas y recordar la hoja. Las notas se guardan en el navegador y pueden exportarse. Las páginas impresas pueden diferir de las hojas del archivo: coteja tu edición.

## Tableta Android

`python tools/build_android.py` empaqueta la edición local con tus documentos cifrados en `.local/android/RutaBergson.apk`, para uso personal y sin publicar. El procedimiento, las herramientas y la instalación están en `android/LEEME.md`.

## Publicar

`python tools/build_public.py` genera `dist/public/` usando una lista explícita de archivos permitidos. Esa carpeta contiene solo la edición pública y no incluye el lector, sus dependencias, documentos, mapas privados ni claves.

`.gitignore` excluye `.local/`, documentos PDF, contenedores cifrados, paquetes exportados y mapas personales. No uses `git add -f` con estos elementos. `.gitignore` no elimina archivos ya versionados ni borra el historial remoto.

`python tests/privacy.py` comprueba el contenido versionado y la exportación. `node tests/editions.cjs` prueba ambas ediciones con Playwright; acepta `CHROME_PATH` y `RUTA_TEST_KEY` mediante el entorno.

## Fuentes

Las referencias bibliográficas se mantienen para atribuir correctamente las lecturas; no son enlaces a copias alojadas. Las ilustraciones de fichas son gráficos propios, sin páginas escaneadas. PDF.js se distribuye bajo Apache-2.0, con sus licencias en `assets/vendor/pdfjs/`.
