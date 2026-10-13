if(!['127.0.0.1','localhost','[::1]'].includes(location.hostname))throw Error('El lector solo se activa en el servidor local.');
import {encrypt,decrypt} from './vault-crypto.mjs';
import * as pdfjs from './vendor/pdfjs/pdf.mjs';
pdfjs.GlobalWorkerOptions.workerSrc=new URL('./vendor/pdfjs/pdf.worker.mjs',import.meta.url).href;
const MAX_BYTES=180*1024*1024;
let secret=null,pending=null,dbPromise,manifestPromise,doc=null,docKey=null,pageNumber=1,zoom=1,renderTask=null,epoch=0,blobURL=null,busy=false;
const viewer=document.getElementById('viewer'),frame=document.getElementById('vframe');frame.hidden=true;frame.style.display='none';
const controls=document.createElement('div');controls.className='reader-controls';controls.innerHTML='<button id="reader-prev" aria-label="Página anterior">←</button><label for="reader-page">Hoja PDF</label><input id="reader-page" type="number" min="1" value="1"><span id="reader-total">/ —</span><button id="reader-next" aria-label="Página siguiente">→</button><button id="reader-minus" class="reader-zoom" aria-label="Reducir zoom">−</button><button id="reader-plus" aria-label="Aumentar zoom">+</button><button id="reader-full">Ampliar</button><button id="reader-lock">Bloquear</button>';
const pageHost=document.createElement('div');pageHost.className='reader-pages';const canvas=document.createElement('canvas');canvas.setAttribute('aria-label','Página del PDF');pageHost.append(canvas);
const status=document.createElement('div');status.className='reader-status';status.setAttribute('role','status');viewer.append(controls,status,pageHost);
const dialog=document.createElement('dialog');dialog.className='vault-dialog';dialog.setAttribute('aria-labelledby','vault-title');document.body.append(dialog);
const esc=window.esc;
function db(){return dbPromise||(dbPromise=new Promise((resolve,reject)=>{const r=indexedDB.open('ruta-pdfs-cifrados-v1',1);r.onupgradeneeded=()=>r.result.createObjectStore('pdfs',{keyPath:'id'});r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(Error('Este navegador no permite guardar los PDF. Revisa el modo privado o el espacio disponible.'));}));}
async function storeGet(id){const d=await db();return new Promise((res,rej)=>{const r=d.transaction('pdfs').objectStore('pdfs').get(id);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});}
async function storeAll(){const d=await db();return new Promise((res,rej)=>{const r=d.transaction('pdfs').objectStore('pdfs').getAll();r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});}
async function storePut(record){const d=await db();return new Promise((res,rej)=>{const t=d.transaction('pdfs','readwrite');t.objectStore('pdfs').put(record);t.oncomplete=()=>res();t.onerror=()=>rej(Error('No se pudo guardar el PDF. Comprueba el espacio del navegador.'));t.onabort=()=>rej(Error('Guardado interrumpido. Conserva el original.'));});}
async function manifest(){return manifestPromise||(manifestPromise=fetch('/__local__/manifest').then(r=>{if(!r.ok)throw Error('No se pudo cargar el catálogo cifrado.');return r.json();}).catch(e=>{manifestPromise=null;throw e;}));}
function setMessage(s){const el=document.getElementById('vault-status');if(el)el.textContent=s;}
function handleError(e){setMessage(e.message||'No se pudo completar la operación.');}
function show(){if(!dialog.open)dialog.showModal();}
function base(body){dialog.innerHTML='<button class="btn close-vault" aria-label="Cerrar biblioteca">Cerrar</button><div class="eyebrow">Tu mesa de lectura</div><h2 id="vault-title">Mis PDF con clave</h2>'+body+'<p id="vault-status" class="vault-status" role="status" aria-live="polite"></p>';dialog.querySelector('.close-vault').onclick=()=>{if(!busy){pending=null;dialog.close();}};}
function unlockView(){
 base('<p>Introduce tu clave para abrir las copias cifradas y tus ejemplares guardados.</p><form id="vault-unlock"><label for="vault-password">Clave de lectura</label><input id="vault-password" type="password" autocomplete="off" required><button class="btn pri" style="margin-top:15px">Desbloquear</button></form><p class="vault-help">La clave se mantiene únicamente mientras esta pestaña está abierta. Puedes bloquear el lector al terminar.</p><p class="vault-note">Los ejemplares que agregues se guardan cifrados solo en este navegador. Para llevarlos a otro equipo, exporta su copia cifrada.</p>');show();
 document.getElementById('vault-unlock').onsubmit=async e=>{e.preventDefault();if(busy)return;busy=true;const button=e.target.querySelector('button');button.disabled=true;const password=document.getElementById('vault-password').value;setMessage('Comprobando clave…');try{const response=await fetch('/__local__/check');if(!response.ok)throw Error('No se pudo cargar la comprobación. Reintenta con conexión.');if(response.status!==204){const check=await decrypt(await response.arrayBuffer(),password);if(new TextDecoder().decode(check)!=='Ruta de lectura · clave verificada')throw Error('Comprobación inválida');}secret=password;document.getElementById('vault-password').value='';busy=false;const request=pending;pending=null;if(request){dialog.close();await openDocument(request.k,request.p);}else await manageView();}catch(e){busy=false;button.disabled=false;setMessage(e.name==='OperationError'?'Clave incorrecta o archivo de comprobación dañado.':e.message);}};
}
function saveDownload(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);}
function bytes64(b){let out='';for(let i=0;i<b.length;i+=32768)out+=String.fromCharCode(...b.subarray(i,i+32768));return btoa(out);}
function from64(s){const b=atob(s);return Uint8Array.from(b,x=>x.charCodeAt(0));}
function isPDF(b){return new TextDecoder().decode(b.slice(0,5))==='%PDF-';}
async function manageView(selected){
 const records=await storeAll(),m=await manifest();
 base('<p>Agrega tu ejemplar una vez y vuelve a leerlo con la clave. Se conserva cifrado en este navegador.</p><form id="vault-import"><label for="vault-reference">Referencia del archivo</label><select id="vault-reference">'+Object.keys(PDF).map(k=>'<option value="'+k+'"'+(k===selected?' selected':'')+'>'+esc(PDF[k].t)+'</option>').join('')+'</select><label for="vault-file">PDF o copia cifrada (.ruta-pdf)</label><input id="vault-file" type="file" accept="application/pdf,.pdf,.ruta-pdf" required><button class="btn pri">Guardar cifrado y leer</button></form><p class="vault-help">Selecciona la edición indicada para que coincidan los saltos de página. Una copia .ruta-pdf conserva la referencia con la que fue exportada.</p><div id="vault-list">'+Object.keys(PDF).map(k=>{const local=records.find(r=>r.id===k),available=!!m.files[k]||!!local;return '<div class="vault-row"><span><strong>'+esc(PDF[k].t)+'</strong><br>'+ (local?'Tu ejemplar · cifrado en este navegador':m.files[k]?'Archivo local · disponible':'Pendiente: agrega tu ejemplar')+'</span><div class="vault-row-actions">'+(available?'<button class="btn" data-vault-read="'+k+'">Leer</button>':'<button class="btn" data-vault-add="'+k+'">Agregar</button>')+(local?'<button class="btn" data-vault-export="'+k+'">Exportar cifrado</button>':'')+'</div></div>';}).join('')+'</div><p class="vault-note">Guarda una copia cifrada si quieres llevarla a otro dispositivo. Borrar los datos del navegador elimina estos ejemplares. La clave corta protege de accesos casuales; no es una protección fuerte frente a intentos sistemáticos.</p><button class="btn" id="vault-lock">Bloquear biblioteca</button>');show();
 document.getElementById('vault-lock').onclick=lock;
 dialog.querySelectorAll('[data-vault-read]').forEach(b=>b.onclick=()=>{dialog.close();openDocument(b.dataset.vaultRead,0);});
 dialog.querySelectorAll('[data-vault-add]').forEach(b=>b.onclick=()=>{document.getElementById('vault-reference').value=b.dataset.vaultAdd;document.getElementById('vault-file').focus();});
 dialog.querySelectorAll('[data-vault-export]').forEach(b=>b.onclick=async()=>{try{const r=await storeGet(b.dataset.vaultExport);const pack={format:'ruta-pdf',version:1,id:r.id,data:bytes64(new Uint8Array(r.data))};saveDownload(new Blob([JSON.stringify(pack)],{type:'application/json'}),r.id+'.ruta-pdf');setMessage('Copia cifrada exportada.');}catch(e){handleError(e);}});
 document.getElementById('vault-import').onsubmit=async e=>{e.preventDefault();if(busy)return;const file=document.getElementById('vault-file').files[0];if(!file)return;const button=e.target.querySelector('button');busy=true;button.disabled=true;setMessage('Cifrando y guardando…');try{if(file.size>MAX_BYTES)throw Error('El archivo supera 180 MB. Usa una copia de menor tamaño.');let id=document.getElementById('vault-reference').value,data;
 if(file.name.endsWith('.ruta-pdf')){const pack=JSON.parse(await file.text());if(pack.format!=='ruta-pdf'||pack.version!==1||!PDF[pack.id]||typeof pack.data!=='string')throw Error('Copia cifrada no reconocida.');id=pack.id;data=from64(pack.data);const plain=await decrypt(data,secret);if(!isPDF(plain))throw Error('La copia no contiene un PDF válido.');}
 else{const plain=new Uint8Array(await file.arrayBuffer());if(!isPDF(plain))throw Error('Selecciona un PDF válido.');data=await encrypt(plain,secret);}
 await storePut({id,data:data.buffer,updatedAt:new Date().toISOString()});busy=false;dialog.close();await openDocument(id,1,true);
 }catch(e){busy=false;button.disabled=false;setMessage(e.name==='OperationError'?'La copia usa otra clave o está dañada.':e.message);}};
}
window.openVault=()=>{pending=null;if(secret)manageView().catch(handleError);else unlockView();};
const topButton=document.createElement('button');topButton.className='chip';topButton.textContent='Mis PDF';topButton.onclick=window.openVault;document.querySelector('.toplinks').append(topButton);
dialog.addEventListener('cancel',e=>{if(busy)e.preventDefault();else pending=null;});
function clearDocument(){epoch++;if(renderTask){renderTask.cancel();renderTask=null;}if(doc){doc.destroy();doc=null;}docKey=null;canvas.width=1;canvas.height=1;if(blobURL){URL.revokeObjectURL(blobURL);blobURL=null;}document.getElementById('vopen').removeAttribute('href');}
function closeReader(){clearDocument();shell.classList.remove('split');viewer.classList.remove('reader-full');}
function lock(){secret=null;pending=null;dialog.close();closeReader();status.textContent='Biblioteca bloqueada.';}
document.getElementById('vclose').onclick=closeReader;document.getElementById('reader-lock').onclick=lock;
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!dialog.open)closeReader();});
async function openDocument(k,p=0,pdfPage=false){
 if(!PDF[k])return;if(!secret){pending={k,p};unlockView();return;}
 clearDocument();const token=epoch;docKey=k;shell.classList.add('split');status.textContent='Abriendo copia cifrada…';document.getElementById('vtitle').textContent=PDF[k].t;
 try{const local=await storeGet(k),m=await manifest();if(token!==epoch)return;
 if(!local&&!m.files[k]){shell.classList.remove('split');await manageView(k);setMessage('Este texto aún no está guardado. Agrega tu ejemplar para leerlo aquí.');return;}
 let ciphertext;if(local)ciphertext=local.data;else{const response=await fetch(m.files[k]);if(!response.ok)throw Error('No se pudo descargar el PDF cifrado. Reintenta con conexión.');ciphertext=await response.arrayBuffer();}
 const bytes=(!local&&m.plain?.includes(k))?new Uint8Array(ciphertext):await decrypt(ciphertext,secret);if(token!==epoch)return;if(!isPDF(bytes))throw Error('El archivo descifrado no es un PDF.');blobURL=URL.createObjectURL(new Blob([bytes],{type:'application/pdf'}));const link=document.getElementById('vopen');link.href=blobURL;link.textContent='Abrir aparte';
 const task=pdfjs.getDocument({data:bytes,cMapUrl:new URL('./vendor/pdfjs/cmaps/',import.meta.url).href,cMapPacked:true,standardFontDataUrl:new URL('./vendor/pdfjs/standard_fonts/',import.meta.url).href,wasmUrl:new URL('./vendor/pdfjs/wasm/',import.meta.url).href,isEvalSupported:false});
 task.onPassword=(update,reason)=>{const own=window.prompt(reason===pdfjs.PasswordResponses.INCORRECT_PASSWORD?'La contraseña propia del PDF es incorrecta. Reintenta:':'Este PDF tiene además una contraseña propia. Escríbela para abrirlo:');if(own===null)task.destroy();else update(own);};
 const loaded=await task.promise;if(token!==epoch){loaded.destroy();return;}doc=loaded;
 let saved=1;try{saved=Number(localStorage.getItem('ruta-page-'+k))||1;}catch{}
 pageNumber=Math.min(doc.numPages,Math.max(1,p?(pdfPage?p:PDF[k].off(p)):saved));zoom=1;document.getElementById('reader-page').max=doc.numPages;document.getElementById('reader-total').textContent='/ '+doc.numPages;await drawPage();
 }catch(e){if(token!==epoch)return;status.textContent=e.name==='OperationError'?'No se pudo descifrar: clave incorrecta o archivo dañado.':(e.message||'No se pudo abrir el documento.');}
}
window.openPDF=(k,p)=>openDocument(k,p||0);
let drawing=0;
async function drawPage(){
 if(!doc)return;const draw=++drawing,token=epoch,currentDoc=doc;if(renderTask){renderTask.cancel();renderTask=null;}
 try{const page=await currentDoc.getPage(pageNumber);if(draw!==drawing||token!==epoch)return;const base=page.getViewport({scale:1}),width=Math.max(260,pageHost.clientWidth-28),scale=Math.min(width/base.width,2)*zoom,viewport=page.getViewport({scale}),ratio=Math.min(devicePixelRatio||1,2);canvas.width=Math.floor(viewport.width*ratio);canvas.height=Math.floor(viewport.height*ratio);canvas.style.width=viewport.width+'px';canvas.style.height=viewport.height+'px';
 const task=page.render({canvasContext:canvas.getContext('2d'),viewport,transform:ratio===1?null:[ratio,0,0,ratio,0,0]});renderTask=task;await task.promise;if(draw!==drawing||token!==epoch)return;renderTask=null;document.getElementById('reader-page').value=pageNumber;document.getElementById('reader-prev').disabled=pageNumber<=1;document.getElementById('reader-next').disabled=pageNumber>=doc.numPages;
 status.textContent='Hoja '+pageNumber+' de '+doc.numPages+' · '+Math.round(zoom*100)+'% · La numeración impresa puede ser distinta.';canvas.setAttribute('aria-label',PDF[docKey].t+', hoja '+pageNumber);try{localStorage.setItem('ruta-page-'+docKey,String(pageNumber));}catch{}
 }catch(e){if(e.name!=='RenderingCancelledException'&&token===epoch)status.textContent='No se pudo dibujar esta página: '+e.message;}
}
function turn(delta){if(doc){pageNumber=Math.min(doc.numPages,Math.max(1,pageNumber+delta));pageHost.scrollTop=0;drawPage();}}
document.getElementById('reader-prev').onclick=()=>turn(-1);document.getElementById('reader-next').onclick=()=>turn(1);
document.getElementById('reader-page').onchange=e=>{if(doc){const n=Number(e.target.value);pageNumber=Number.isFinite(n)?Math.min(doc.numPages,Math.max(1,Math.floor(n))):1;drawPage();}};
document.getElementById('reader-minus').onclick=()=>{zoom=Math.max(.5,zoom-.25);drawPage();};document.getElementById('reader-plus').onclick=()=>{zoom=Math.min(3,zoom+.25);drawPage();};
document.getElementById('reader-full').onclick=()=>{viewer.classList.toggle('reader-full');document.getElementById('reader-full').textContent=viewer.classList.contains('reader-full')?'Reducir':'Ampliar';drawPage();};
let resizeTimer;new ResizeObserver(()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(drawPage,180);}).observe(pageHost);
window.addEventListener('pagehide',()=>{secret=null;clearDocument();});
window.dispatchEvent(new Event('ruta-reader-ready'));
