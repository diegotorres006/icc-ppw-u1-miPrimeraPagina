document.addEventListener('DOMContentLoaded', function () {
  const btnToggle = document.getElementById('btn-toggle-table');
  const tbl = document.querySelector('.tabla-ejemplo');
  const btnPdf = document.getElementById('btn-open-pdf');

  if (btnToggle && tbl) {
    btnToggle.addEventListener('click', function () {
      if (tbl.style.display === 'none') {
        tbl.style.display = '';
        btnToggle.textContent = 'Ocultar / Mostrar tabla';
      } else {
        tbl.style.display = 'none';
        btnToggle.textContent = 'Mostrar tabla';
      }
    });
  }

  if (btnPdf) {
    btnPdf.addEventListener('click', function () {
      // abre el PDF oficial en nueva pestaña
      window.open('https://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf', '_blank', 'noopener');
    });
  }
});
