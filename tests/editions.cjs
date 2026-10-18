const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const os=require('node:os'),pathMod=require('node:path');
const SHOTS=process.env.RUTA_SHOTS||os.tmpdir();
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--no-sandbox']});
 try {
 const page=await browser.newPage({viewport:{width:1280,height:900}});
 page.setDefaultTimeout(20000);
 const errors=[],requests=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('request',r=>requests.push(r.url()));
 await page.goto('http://127.0.0.1:8765/public.html');
 assert.equal(await page.evaluate(()=>ST.length),12);
 await page.evaluate(()=>go('biblioteca'));
 assert.equal(await page.locator('.book').count(),35);
 assert.equal(await page.getByRole('button',{name:'Mis PDF',exact:true}).count(),0);
 assert.equal(await page.locator('#viewer,iframe,[data-pdf],[data-vault],.reference-card,.book-cover,.edition-note').count(),0);
 assert.equal(await page.locator('a[href$=".pdf"]').count(),0);
 assert.equal(await page.locator('[data-pdf]:enabled').count(),0);
 await page.locator('#book-search').fill('Riemann');
 assert.equal(await page.locator('.book:not([hidden])').count(),4);
 await page.evaluate(()=>go('atlas'));
 assert.equal(await page.locator('.plate-grid .plate').count(),8);
 await page.locator('#metric-a').fill('4');
 assert.equal(await page.locator('#metric-length').textContent(),'1,479');
 assert(!requests.some(u=>/__local__|\.bin|\.pdf|lector\.js|vault-crypto/.test(u)));
 for (const id of await page.evaluate(()=>ST.map(s=>s.id).concat(['mapa','biblioteca','armar']))) {
   await page.evaluate(id=>go(id),id);
   assert.equal(await page.locator('#viewer,iframe,[data-pdf],[data-vault],.reference-card,.book-cover').count(),0,id);
   assert(!/\bPDF\b/.test(await page.locator('body').innerText()),id);
 }
 // Deep reading is present in all stations and remains navigable on mobile.
 const content=await page.evaluate(()=>Object.fromEntries(Object.entries(RUTA_ANALISIS).map(([id,a])=>[id,{sections:a.sections.length,words:a.sections.flatMap(s=>s.paragraphs).join(' ').split(/\s+/).length}])));
 assert.equal(Object.keys(content).length,12);
 for(const [id,stats] of Object.entries(content)) {
   assert.equal(stats.sections,7,id);
   assert(stats.words>=800,id+': insufficient developed content');
   await page.evaluate(id=>{S.tab[id]='entiende';S.ptab='vistazo';go(id)},id);
   assert.equal(await page.locator('.analysis-section').count(),7,id);
   assert.equal(await page.locator('.analysis-source').count(),1,id);
   const route=await page.evaluate(()=>location.hash);
   await page.locator('.analysis-toc button').last().click();
   assert.equal(await page.evaluate(()=>location.hash),route,'contents must not change route');
   assert.equal(await page.evaluate(()=>document.activeElement.id),'analysis-'+id+'-6');
   await page.setViewportSize({width:390,height:844});
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),id+': mobile overflow');
   assert.equal(await page.locator('.reference-card,.book-cover,[data-pdf],[data-vault]').count(),0,id);
   await page.setViewportSize({width:1280,height:900});
 }
 await page.evaluate(()=>{S.tab.capV='citas';go('capV')});
 await page.locator('[data-return-analysis]').click();
 assert.equal(await page.locator('.analysis-section').count(),7);
 await page.setViewportSize({width:390,height:844});
 await page.evaluate(()=>scrollTo(0,0));
 await page.screenshot({path:pathMod.join(SHOTS,'ruta-analysis-mobile.png')});
 await page.setViewportSize({width:1280,height:900});
 await page.screenshot({path:pathMod.join(SHOTS,'ruta-analysis-desktop.png')});
 for(const path of ['/.git/config','/.local/paths.json','/assets/../../.local/paths.json','/tools/serve_local.py']) {
   const response=await page.request.get('http://127.0.0.1:8765'+path);
   assert.equal(response.status(),404,path);
 }
 assert.equal((await page.request.get('http://127.0.0.1:8765/__local__/manifest',{headers:{Origin:'https://example.com'}})).status(),403);
 await page.goto('http://127.0.0.1:8765/local.html');
 await page.getByRole('button',{name:'Mis PDF',exact:true}).click();
 await page.locator('#vault-password').fill('incorrect-test-password');
 await page.getByRole('button',{name:'Desbloquear',exact:true}).click();
 await page.waitForFunction(()=>document.querySelector('#vault-status').textContent.includes('incorrecta'));
 const manifest=await (await page.request.get('http://127.0.0.1:8765/__local__/manifest')).json();
 assert.equal(Object.keys(manifest.files).length,35);
 assert(Object.values(manifest.files).every(p=>p.startsWith('/__local__/pdf/')));
 if(process.env.RUTA_TEST_KEY){
   await page.locator('#vault-password').fill(process.env.RUTA_TEST_KEY);
   await page.getByRole('button',{name:'Desbloquear',exact:true}).click();
   await page.locator('[data-vault-read="riemEN"]').click();
   await page.waitForFunction(()=>document.querySelector('.reader-status').textContent.startsWith('Hoja '));
   await page.locator('#reader-next').click();
   await page.waitForFunction(()=>document.querySelector('.reader-status').textContent.startsWith('Hoja 2 de'));
   await page.setViewportSize({width:390,height:844});
   await page.locator('#reader-lock').click();
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 } else {
   console.log('OMITIDO: lectura cifrada, paginación y bloqueo (define RUTA_TEST_KEY para probarlos).');
 }
 assert.equal(errors.length,0,errors.join('\n'));
 console.log('PASS: pública sin PDF ni solicitudes privadas; lector local'+(process.env.RUTA_TEST_KEY?', clave, paginación, móvil':', clave incorrecta')+' y bloqueo de rutas privadas. Capturas en '+SHOTS);
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
