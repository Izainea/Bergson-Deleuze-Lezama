# APK de la edición local para Android

La app lleva dentro la edición local completa: la ruta, el lector, PDF.js y los documentos cifrados que figuran en `.local/paths.json`. Funciona sin internet y sin servidor Python. Uso personal: **el APK no se publica ni se comparte**, porque contiene tus documentos (cifrados, pero completos).

## Cómo funciona

- `MainActivity.java` abre un WebView en `https://localhost/local.html`. Ninguna petición sale a la red: `shouldInterceptRequest` responde cada ruta con un archivo de `assets/www/` dentro del APK.
- El nombre `localhost` cumple la condición de `assets/lector.js`, que solo se activa en el servidor local, y da un contexto seguro para el cifrado del navegador.
- Las rutas privadas del servidor Python se convierten en archivos estáticos: `/__local__/manifest` → `__local__/manifest.json`, `/__local__/check` → `__local__/check`, `/__local__/pdf/<clave>` → `__local__/pdf/<clave>`.
- La página es la misma que genera `tools/serve_local.py` (`local_html()`), más un pequeño script que pasa al puente nativo `RutaAndroid` las descargas `blob:` (notas, copias `.ruta-pdf`). El WebView no sabe descargarlas. Se guardan en `Descargas/Ruta Bergson`.
- La app también abre el selector de archivos para **Mis PDF**, admite pantalla completa y usa el botón Atrás del sistema para volver entre estaciones.
- Las notas, el progreso y los ejemplares añadidos quedan en el almacenamiento de la app en la tableta, separados de los del navegador del ordenador.

## Herramientas

Se instalaron fuera del repositorio, en `~/.ruta-android/` (otra carpeta con `RUTA_ANDROID_HOME`):

| Carpeta | Contenido | Origen |
|---|---|---|
| `jdk/jdk-17…/` | JDK 17 portátil | Eclipse Temurin (api.adoptium.net), zip |
| `sdk/cmdline-tools/latest/` | Herramientas de línea de comandos | `commandlinetools-win-11076708_latest.zip` |
| `sdk/platforms/android-34/` | `android.jar` de Android 14 | `platform-34-ext7_r03.zip` |
| `sdk/build-tools/34.0.0/` | `aapt2`, `d8`, `zipalign`, `apksigner` | `build-tools_r34-windows.zip` |

Todos se descargan de `dl.google.com/android/repository/`. `sdkmanager` se colgó al bajar la plataforma, así que la plataforma y las build-tools se descomprimieron a mano. No se usa Gradle ni Android Studio.

## Generar el APK

```
python tools/build_android.py
```

El script:

1. Arma los intermedios en una carpeta temporal fuera de Dropbox. Allí copia `index.html` en versión local, `assets/` (con PDF.js) y `resumenes/`, más los documentos y la comprobación de clave según `.local/paths.json`.
2. `aapt2 compile` / `aapt2 link`: compila el icono (`res/drawable/icon.xml`) y el manifiesto, y añade `assets/`. El `versionCode` son los minutos desde 1970, así que cada APK nuevo se instala encima del anterior.
3. `javac` (Java 8, contra `android.jar`) y `d8`: generan `classes.dex`. No se pueden usar lambdas en `MainActivity.java`, porque `android.jar` no incluye lo que necesitan para compilar.
4. `zipalign` y `apksigner`: alinean y firman el APK. La clave se crea la primera vez en `.local/android/ruta.keystore`, con su contraseña en `.local/android/keystore-clave.txt`.

Resultado: `.local/android/RutaBergson.apk`, unos 155 MB con 35 documentos cifrados. `.local/` y los patrones `*.apk`, `*.keystore` y `*.jks` están en `.gitignore`.

**Conserva el keystore.** Android solo acepta una actualización si está firmada con la misma clave. Si se pierde, hay que desinstalar la app, y con ella se borran las notas guardadas en la tableta: expórtalas antes.

## Instalar en la tableta

1. Copia `RutaBergson.apk` a la tableta, por ejemplo abriéndolo desde la app de Dropbox o por cable USB.
2. Ábrelo y permite **instalar apps de origen desconocido** para la app desde la que lo abres (Dropbox, Archivos…).
3. Abre **Ruta Bergson**. En **Mis PDF** introduce la misma clave de lectura que usas en el ordenador.

Para actualizarlo, ejecuta de nuevo `python tools/build_android.py` y repite los pasos 1 y 2.
