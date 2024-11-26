const header = document.querySelector('.header');
const headerContenedor = document.querySelector(".header__contenedor");
const menu = document.querySelector('.nav__contenedor');
const abrirMenu = document.querySelector('.menu__icon');
const cerrarMenu = document.querySelector('.menu__cerrar');
const presentacionContenedor = document.querySelector(".presentacion__contenedor");
const botonAbajo = document.querySelector(".boton-down");
const botonArriba = document.querySelector('.boton-up');
const primeraSeccion = document.querySelector('.presentacion');
const botonFormulario = document.querySelector('.contacto__formulario-boton');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const botonWhatsapp = document.querySelector('.boton-whatsapp');
const modal = document.querySelector(".modal");
const cerrarModal = document.querySelector(".modal__icon-cerrar");
const inputNombreUsuario = document.getElementById("nombreUsuario");
const enviarWhatsapp = document.querySelector(".modal__boton");
const celularPersonal = "51966428394";
const mensajeBase = "me interesa hablar contigo sobre tus servicios.";
const botonesFlotantes = document.querySelectorAll(".boton-flotante");

// Evento para mostrar la barra de menú al cargar la página
window.onload = () => {
    headerContenedor.classList.add("visible");
    presentacionContenedor.classList.add("visible");
    botonAbajo.classList.add("visible");
};

// Evento para cambiar el background de la barra de menú al hacer "scroll"
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Evento para ocultar el botón flotante de la primera sección
window.addEventListener('scroll', () => {
    const primeraSeccionBottom = primeraSeccion.getBoundingClientRect().bottom;
    botonesFlotantes.forEach(boton => {
        if (primeraSeccionBottom > 0) {
            boton.style.opacity = '0';
            boton.style.visibility = 'hidden';
        } else {
            boton.style.opacity = '1';
            boton.style.visibility = 'visible';
        }
    });
});

// Evento para que al desplazrme por una opción del menú se detenga al iniciar la sección y no tape el título
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = targetElement.offsetTop - document.querySelector(".header").offsetHeight;
        window.scrollTo({
            top: offset,
            behavior: "smooth"
        });
    });
});

// Evento que muestra de manera suave el menú en pantallas pequeñas
document.querySelector(".logo__contenedor").addEventListener("click", function (e) {
    e.preventDefault();
    const targetSection = document.querySelector("#top");
    const offset = targetSection.offsetTop - document.querySelector(".header").offsetHeight;
    window.scrollTo({
        top: offset,
        behavior: "smooth",
    });
});

// Evento que envía correo al completar el formulario
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    botonFormulario.value = 'Enviando...';
    const serviceID = 'default_service';
    const templateID = 'template_04arj6v';

    emailjs.sendForm(serviceID, templateID, this).then(() => {
        botonFormulario.value = 'Enviar mensaje';
        showNotification(successMessage, 'success');
        this.reset();
    }, (err) => {
        botonFormulario.value = 'Enviar mensaje';
        console.error("Error al enviar el mensaje:", err);
        showNotification(errorMessage, 'error');
    });
});

// Evento para enviar whatsapp
enviarWhatsapp.addEventListener("click", function() {
    const nombreUsuario = inputNombreUsuario.value.trim();
    const mensajePersonalizado = `Hola, mi nombre es ${nombreUsuario} y ${mensajeBase}`;
    const mensajeCodificado = encodeURIComponent(mensajePersonalizado);
    const enlaceWhatsapp = `https://wa.me/${celularPersonal}?text=${mensajeCodificado}`;
    window.open(enlaceWhatsapp, "_blank");
    inputNombreUsuario.value = "";
    modal.style.display = "none";
});

// Otros eventos de click
botonWhatsapp.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "block";
});
cerrarModal.addEventListener("click", function() {
    modal.style.display = "none";
});
abrirMenu.addEventListener('click', () => {
    menu.classList.add('visible');
});
cerrarMenu.addEventListener('click', () => {
    menu.classList.remove('visible');
});

// Cerrar el modal al hacer click fuera del modal
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
// Cerrar el menú al hacer click fuera de su contenido
document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !abrirMenu.contains(event.target)) {
        menu.classList.remove("visible");
    }
});

// Función general para mostrar notificación al enviar formulario
function showNotification(elemento, tipo) {
    elemento.classList.remove('hidden');
    elemento.classList.add('visible');
    elemento.classList.add(tipo); 
    setTimeout(() => {
        elemento.classList.remove('visible');
        elemento.classList.add('hidden');
    }, 4000);
}



