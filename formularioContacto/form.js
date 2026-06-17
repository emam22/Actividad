const formContact = document.getElementById("form-contact");

formContact.addEventListener("submit", function(e) {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = parseInt(document.getElementById("edad").value, 10);
    const pais = document.getElementById("pais").value;
    const terminos = document.getElementById("terminos").checked;


    if (nombre.length < 5) {
        e.preventDefault();
        alert("El nombre debe tener al menos 5 caracteres.");
        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        e.preventDefault();
        alert("Correo electrónico inválido.");
        return;
    }

    if (isNaN(edad) || edad < 18 || edad > 60) {
        e.preventDefault();
        alert("Debe de tener entre 18 y 60 años.");
        return;
    }

    if (pais === "") {
        e.preventDefault();
        alert("Seleccione un país de la lista.");
        return;
    }

    if (!terminos) {
        e.preventDefault();
        alert("Debe aceptar los términos y condiciones para continuar.");
        return;
    }

    alert("Muchas Gracias por su interes. Será Contactado a la brevedad.");
});