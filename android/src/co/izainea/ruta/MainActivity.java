package co.izainea.ruta;

import android.app.Activity;
import android.content.ContentValues;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Base64;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.Toast;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

/**
 * Edición local sin servidor: la página, PDF.js y los documentos cifrados
 * viajan dentro del APK y se sirven desde https://localhost/.
 */
public class MainActivity extends Activity {
    private static final String ORIGIN = "https://localhost/";
    private static final int PICK_FILE = 1;
    private WebView web;
    private FrameLayout root;
    private View fullscreen;
    private ValueCallback<Uri[]> fileCallback;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        root = new FrameLayout(this);
        web = new WebView(this);
        root.addView(web, new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        setContentView(root);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);
        s.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        s.setBuiltInZoomControls(true);
        s.setDisplayZoomControls(false);
        web.addJavascriptInterface(new Bridge(), "RutaAndroid");

        web.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                if (!"localhost".equals(uri.getHost())) return null;
                return serve(uri.getPath());
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                if ("localhost".equals(uri.getHost())) return false;
                try { startActivity(new Intent(Intent.ACTION_VIEW, uri)); } catch (Exception ignored) { }
                return true;
            }
        });

        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback, FileChooserParams params) {
                if (fileCallback != null) fileCallback.onReceiveValue(null);
                fileCallback = callback;
                Intent intent = new Intent(Intent.ACTION_GET_CONTENT);
                intent.addCategory(Intent.CATEGORY_OPENABLE);
                intent.setType("*/*");
                try {
                    startActivityForResult(Intent.createChooser(intent, "Elegir archivo"), PICK_FILE);
                } catch (Exception e) {
                    fileCallback = null;
                    return false;
                }
                return true;
            }

            @Override
            public void onShowCustomView(View view, CustomViewCallback callback) {
                fullscreen = view;
                root.addView(view, new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
                web.setVisibility(View.GONE);
            }

            @Override
            public void onHideCustomView() {
                if (fullscreen != null) root.removeView(fullscreen);
                fullscreen = null;
                web.setVisibility(View.VISIBLE);
            }
        });

        if (state != null) web.restoreState(state);
        else web.loadUrl(ORIGIN + "local.html");
    }

    private WebResourceResponse serve(String path) {
        if (path == null || path.equals("/") || path.equals("/local.html") || path.equals("/index.html")) path = "/index.html";
        if (path.equals("/__local__/manifest")) path = "/__local__/manifest.json";
        if (path.contains("..")) return status(404);
        String asset = "www" + path;
        Map<String, String> headers = new HashMap<>();
        headers.put("Cache-Control", "no-store");
        headers.put("Access-Control-Allow-Origin", ORIGIN.substring(0, ORIGIN.length() - 1));
        try {
            InputStream in = getAssets().open(asset);
            return new WebResourceResponse(mime(path), null, 200, "OK", headers, in);
        } catch (IOException e) {
            if (path.equals("/__local__/check")) return status(204);
            return status(404);
        }
    }

    private WebResourceResponse status(int code) {
        return new WebResourceResponse("text/plain", "utf-8", code, code == 204 ? "No Content" : "Not Found",
                new HashMap<String, String>(), new ByteArrayInputStream(new byte[0]));
    }

    private static String mime(String path) {
        String p = path.toLowerCase();
        if (p.endsWith(".html")) return "text/html";
        if (p.endsWith(".js") || p.endsWith(".mjs")) return "text/javascript";
        if (p.endsWith(".css")) return "text/css";
        if (p.endsWith(".json")) return "application/json";
        if (p.endsWith(".svg")) return "image/svg+xml";
        if (p.endsWith(".jpg") || p.endsWith(".jpeg")) return "image/jpeg";
        if (p.endsWith(".png")) return "image/png";
        if (p.endsWith(".md")) return "text/markdown";
        if (p.endsWith(".wasm")) return "application/wasm";
        if (p.endsWith(".ttf")) return "font/ttf";
        return "application/octet-stream";
    }

    @Override
    protected void onActivityResult(int request, int result, Intent data) {
        if (request != PICK_FILE || fileCallback == null) return;
        Uri[] picked = null;
        if (result == RESULT_OK && data != null && data.getData() != null) picked = new Uri[]{data.getData()};
        fileCallback.onReceiveValue(picked);
        fileCallback = null;
    }

    @Override
    protected void onSaveInstanceState(Bundle state) {
        super.onSaveInstanceState(state);
        web.saveState(state);
    }

    @Override
    public void onBackPressed() {
        if (fullscreen != null) web.getWebChromeClient().onHideCustomView();
        else if (web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }

    /** Guarda en Descargas lo que la página descarga con un enlace blob:. */
    private class Bridge {
        @JavascriptInterface
        public void save(final String name, String type, String base64) {
            String message;
            try {
                byte[] data = Base64.decode(base64, Base64.DEFAULT);
                String safe = name.replaceAll("[\\\\/:*?\"<>|]", "_");
                if (Build.VERSION.SDK_INT >= 29) {
                    ContentValues v = new ContentValues();
                    v.put(MediaStore.MediaColumns.DISPLAY_NAME, safe);
                    v.put(MediaStore.MediaColumns.MIME_TYPE, type);
                    v.put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS + "/Ruta Bergson");
                    Uri uri = getContentResolver().insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, v);
                    if (uri == null) throw new IOException("sin destino");
                    try (OutputStream out = getContentResolver().openOutputStream(uri)) { out.write(data); }
                    message = "Guardado en Descargas/Ruta Bergson: " + safe;
                } else {
                    File dir = getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
                    File file = new File(dir, safe);
                    try (FileOutputStream out = new FileOutputStream(file)) { out.write(data); }
                    message = "Guardado en " + file.getAbsolutePath();
                }
            } catch (Exception e) {
                message = "No se pudo guardar el archivo.";
            }
            final String text = message;
            runOnUiThread(new Runnable() {
                @Override
                public void run() { Toast.makeText(MainActivity.this, text, Toast.LENGTH_LONG).show(); }
            });
        }
    }
}
