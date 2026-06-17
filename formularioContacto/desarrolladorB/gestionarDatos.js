window.addEventListener("load", function () {

    let datosParam = window.location.search;
    const datosUrl = new URLSearchParams(datosParam);

    const nombre = datosUrl.get("nombre");
    const email = datosUrl.get("email");
    const edad = datosUrl.get("edad");
    const pais = datosUrl.get("pais");
    const terminos = datosUrl.get("terminos");

    const contenedorNombre = document.getElementById('dato-nombre');
    const contenedorEmail = document.getElementById('dato-email');
    const contenedorEdad = document.getElementById('dato-edad');
    const contenedorPais = document.getElementById('dato-pais');
    const contenedorTerminos = document.getElementById('dato-terminos');

    contenedorNombre.innerHTML = nombre ? nombre : "No provisto";
    contenedorEmail.innerHTML = email ? email : "No provisto";
    contenedorEdad.innerHTML = edad ? edad : "No provisto";
    contenedorPais.innerHTML = pais ? pais : "No provisto";

    if (terminos === 'aceptado') {
        contenedorTerminos.innerHTML = "Aceptados";
    } else {
        contenedorTerminos.innerHTML = "No aceptados";
    }
});