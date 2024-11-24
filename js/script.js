const header = document.querySelector('.header');
const headerContenedor = document.querySelector(".header__contenedor");
const menu = document.querySelector('.nav__contenedor');
const abrirMenu = document.querySelector('.menu__icon');
const cerrarMenu = document.querySelector('.menu__cerrar');
const presentacionContenedor = document.querySelector(".presentacion__contenedor");
const botonAbajo = document.querySelector(".boton-down");
const botonArriba = document.querySelector('.boton-up');
const primeraSeccion = document.querySelector('.presentacion');

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
    if (primeraSeccionBottom > 0) {
        botonArriba.style.opacity = '0';
        botonArriba.style.visibility = 'hidden';
    } else {
        botonArriba.style.opacity = '1';
        botonArriba.style.visibility = 'visible';
    }
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

abrirMenu.addEventListener('click', () => {
    menu.classList.add('visible');
});
cerrarMenu.addEventListener('click', () => {
    menu.classList.remove('visible');
});