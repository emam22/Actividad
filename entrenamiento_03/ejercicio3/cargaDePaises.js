let todosLosPaises = [];

async function cargarPaises() {
  const response = await fetch('paises.json');
  todosLosPaises = await response.json();
  renderizarPaises(todosLosPaises);
  configurarBuscador();
}

  const grilla = document.getElementById('grilla-paises');

  function renderizarPaises(paises) {
    const grilla = document.getElementById('grilla-paises');
    grilla.innerHTML = '';

    paises.forEach(pais => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
      <img src="https://flagcdn.com/w80/${pais.codigo}.png" alt="Bandera de ${pais.pais}">
      <p>${pais.pais}</p>
    `;

      card.addEventListener('click', () => abrirPopup(pais));
      grilla.appendChild(card);
    });
  }

  function abrirPopup(pais) {
    document.getElementById('popup-nombre').textContent = pais.pais;
    document.getElementById('popup-bandera').src = `https://flagcdn.com/w160/${pais.codigo}.png`;
    document.getElementById('popup-grupo').textContent = `Grupo ${pais.grupo}`;

    const lista = pais.compañeros.map(c => `<li>${c}</li>`).join('');
    document.getElementById('popup-companeros').innerHTML = lista;

    document.getElementById('popup').classList.add('visible');
  }

  function cerrarPopup() {
    document.getElementById('popup').classList.remove('visible');
  }

  function configurarBuscador() {
    const buscador = document.getElementById('buscador');

    buscador.addEventListener('input', (e) => {
      const textoBusqueda = e.target.value.toLowerCase();

      const paisesFiltrados = todosLosPaises.filter(pais =>
        pais.pais.toLowerCase().includes(textoBusqueda)
      );
      renderizarPaises(paisesFiltrados);
    });
  }

  cargarPaises();