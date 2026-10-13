/* Referencias complementarias. Paginación: hoja PDF salvo indicación. */
var SUPPLEMENTAL_BOOKS=[
 ['proust','Deleuze, Proust y los signos','Estudio sobre signos y aprendizaje'],
 ['parAlt','Lezama, Paradiso · segundo ejemplar','Edición alternativa · cotejar paginación'],
 ['pelaez','Peláez Pérez, El sistema poético de Lezama','Estudio de apoyo · Universidad de Antioquia'],
 ['naciff','Naciff, Lectura de La expresión americana','CILHA, 2005 · estudio de apoyo'],
 ['ruiz','Ruiz Barrionuevo, Paradiso: aventura de la imagen','Estudio de apoyo'],
 ['diaz','Díaz, ¿Qué es poesía? Lezama y el logos poético','El Jardín de los Poetas, 2018'],
 ['santayaOnto','Santaya, Deleuze y la onto-topología de la expresión','Ágora, 2021 · el pliegue'],
 ['textoPoetico','Díaz y Merino, Eras imaginarias y La expresión americana','Texto Poético · estudio de apoyo'],
 ['duchesne','Duchesne Winter, Comunismo literario y teorías deseantes','Estudio de apoyo'],
 ['ulloa','Ulloa, Introducción a La cantidad hechizada','Vista previa · fragmento, no libro completo'],
 ['crespo','Crespo Buiturón, Indagaciones sobre el neobarroco','Gramma · Universidad del Salvador'],
 ['valenzuela','Valenzuela y Aldridge, Danza de lo invisible','Atenea, 2017 · teoría de la imagen']
];
SUPPLEMENTAL_BOOKS.forEach(function(b){PDF[b[0]]={t:b[1],s:b[2],f:'',off:function(p){return p}};ROUTE_PREVIEWS.books[b[0]]={image:'assets/atlas/ficha-'+b[0]+'.svg',page:1};});
PDF.myem.s='Edición en español · traducción y edición por verificar';
PDF.paetsch.off=function(p){return p>=336?p-336+2:p};
PDF.santaya.off=function(p){return p>=49?p-49+1:p};
PDF.calam17.off=function(p){return p>=328?p-328+2:p};
var memoryStation=ST.find(function(s){return s.id==='memoria'});memoryStation.pdf=['berg',51];memoryStation.meta[0]='Capítulo III · pp. 51–74';memoryStation.guide[0][3]=51;
var durationsStation=ST.find(function(s){return s.id==='duraciones'});durationsStation.pdf=['berg',75];durationsStation.meta[0]='Capítulo IV · pp. 75–94';durationsStation.guide[0][3]=75;
[
 ['matiereFR','Bergson, Matière et mémoire · original francés','1896 · ejemplar histórico'],
 ['dureeFR','Bergson, Durée et simultanéité · original francés','1922 · ejemplar histórico'],
 ['riemannOeuvres','Riemann, Œuvres mathématiques','Traducción francesa de Laugel, 1898']
].forEach(function(b){SUPPLEMENTAL_BOOKS.push(b);PDF[b[0]]={t:b[1],s:b[2],f:'',off:function(p){return p}};ROUTE_PREVIEWS.books[b[0]]={image:'assets/atlas/ficha-'+b[0]+'.svg',page:1};});
ST.find(function(s){return s.id==='materia'}).pdf2=['matiereFR',0,'Contrastar con el original francés'];
ST.find(function(s){return s.id==='duraciones'}).pdf2=['dureeFR',0,'Leer Durée et simultanéité'];
ST.find(function(s){return s.id==='riemann'}).alert='La bibliografía incluye las Œuvres mathématiques en francés. Su paginación no coincide con las ediciones EMIS.';
