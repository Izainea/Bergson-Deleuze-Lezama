(function () {
  const local = window.RUTA_LOCAL === true;
  const style = document.createElement('style');
  style.textContent = '.book-cover{cursor:default}.edition-note{font-size:.85rem;color:var(--accent);margin:10px 0}' +
    (local ? '' : '[data-pdf]:not(.book-cover):not(.reference-page),[data-vault]{display:none!important}.book .pdfrow{display:none}');
  document.head.append(style);
  if (!local) window.openPDF = function () {};
  const previous = render;
  render = function () {
    previous();
    document.querySelectorAll('.book').forEach(book => {
      const image = book.querySelector('img');
      if (image) image.alt = 'Ficha bibliográfica';
      const spans = book.querySelectorAll('.book-info > span');
      if (spans[1]) spans[1].textContent = local ? 'Abre tu ejemplar local' : 'Referencia bibliográfica · sin archivo adjunto';
      book.querySelectorAll('a').forEach(a => a.remove());
    });
    document.querySelectorAll('.reference-caption').forEach(e => e.textContent = 'Referencia de lectura · coteja tu edición');
    document.querySelectorAll('.reference-page img').forEach(e => e.alt = 'Apoyo visual de la referencia');
    if (!local) document.querySelectorAll('[data-pdf]').forEach(b => {b.onclick = null; b.disabled = true;});
    if (view === 'biblioteca') document.querySelector('.lead').textContent = local
      ? 'Abre tus documentos desde este equipo. Los archivos y sus rutas se mantienen fuera de la edición pública.'
      : 'Bibliografía de la ruta. Esta edición no aloja ni permite descargar los documentos.';
  };
  const note = document.createElement('span');
  note.className = 'edition-note';
  note.textContent = local ? 'Edición local · con lector PDF' : 'Edición pública · sin PDF';
  document.querySelector('.toplinks').append(note);
  render();
})();
