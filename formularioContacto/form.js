const formContact = document.getElementById("form-contact");
const btnLimpiar = document.getElementById("btn-limpiar");

formContact.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = parseInt(document.getElementById("edad").value, 10);
    const pais = document.getElementById("pais").value;
    const terminos = document.getElementById("terminos").checked;

    
    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorEdad = document.getElementById("error-edad");
    const errorPais = document.getElementById("error-pais");
    const errorTerminos = document.getElementById("error-terminos");

    errorNombre.style.display = "none";
    errorEmail.style.display = "none";
    errorEdad.style.display = "none";
    errorPais.style.display = "none";
    errorTerminos.style.display = "none";


    if (!nombre) {
        errorNombre.textContent = "Debe ingresar su nombre";
        errorNombre.style.display = "block";
        return;
    }

    if (nombre.length < 5) {
        errorNombre.textContent = "El nombre debe tener al menos 5 caracteres.";
        errorNombre.style.display = "block";
        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        errorEmail.textContent = "Correo electrónico inválido.";
        errorEmail.style.display = "block";
        return;
    }

    if (isNaN(edad) || edad < 18 || edad > 60) {
        errorEdad.textContent = "Debe de tener entre 18 y 60 años.";
        errorEdad.style.display = "block";
        return;
    }

    if (pais === "" || pais == "disable") {
        errorPais.textContent = "Seleccione un país de la lista.";
        errorPais.style.display = "block";
        return;
    }

    if (!terminos) {
        errorTerminos.textContent = "Debe aceptar los términos y condiciones para continuar.";
        errorTerminos.style.display = "block"
        return;
    }

    alert("Muchas Gracias por su interes. Será Contactado a la brevedad.");
});

function limpiarErrores() {
    
     let errores = document.querySelectorAll(".mensajeAlerta");

    errores.forEach(function (error) {
        error.textContent = "";
        error.style.display = "none";
    });
}

btnLimpiar.addEventListener("click", limpiarErrores);