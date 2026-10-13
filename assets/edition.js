(function () {
  const local = window.RUTA_LOCAL === true;
  const style = document.createElement('style');
  style.textContent = '.edition-note{font-size:.85rem;color:var(--accent);margin:10px 0}' +
    (local ? '' : '.book-cover,.reference-page{cursor:default}');
  document.head.append(style);
  if (!local) window.openPDF = function () {};
  const previous = render;
  render = function () {
    previous();
    document.querySelectorAll('.book').forEach(book => {
      const image = book.querySelector('img');
      if (image) image.alt = 'Ficha bibliográfica';
      const spans = book.querySelectorAll('.book-info > span');
      if (spans[1]) spans[1].textContent = local ? 'Abre tu ejemplar local' : 'Referencia bibliográfica';
      book.querySelectorAll('a').forEach(a => a.remove());
    });
    document.querySelectorAll('.reference-caption').forEach(e => e.textContent = 'Referencia de lectura · coteja tu edición');
    document.querySelectorAll('.reference-page img').forEach(e => e.alt = 'Apoyo visual de la referencia');
    if (!local) {
      document.querySelectorAll('.reference-card,.book-cover,[data-pdf]').forEach(b => b.remove());
      document.querySelectorAll('[data-vault]').forEach(b => b.remove());
      document.querySelectorAll('.pdfrow').forEach(row => {if (!row.children.length) row.remove();});
      const walker = document.createTreeWalker(app, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        node.textContent = node.textContent
          .replace('El botón abre el PDF al lado, en la página.', 'Consulta los pasajes en tu edición.')
          .replace('Cada cita cotejada con la imagen del PDF', 'Cada cita cotejada con la edición de referencia')
          .replace(/\bPDF\b/g, 'ejemplar de referencia');
      }
    }
    if (view === 'biblioteca') document.querySelector('.lead').textContent = local
      ? 'Abre tus documentos desde este equipo. Los archivos y sus rutas se mantienen fuera de la edición pública.'
      : 'Autores y obras para acompañar la ruta. Consulta las referencias y coteja los pasajes en tu edición.';
  };
  const note = document.createElement('span');
  note.className = 'edition-note';
  note.textContent = 'Edición local · con lector PDF';
  if (local) document.querySelector('.toplinks').append(note);
  render();
})();
