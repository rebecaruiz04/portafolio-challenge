const header = document.querySelector('.header');
const menu = document.querySelector('.navegacion');
const abrirMenu = document.querySelector('.menu_icon');
const cerrarMenu = document.querySelector('.navegacion__icon');

const botonFlotante = document.querySelector('.boton-flotante-arriba');
const primeraSeccion = document.querySelector('.presentacion');

abrirMenu.addEventListener('click', () => {
    menu.classList.add('visible');
});

cerrarMenu.addEventListener('click', () => {
    menu.classList.remove('visible');
});


// Agrega un event listener para detectar el scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Cambia el número según cuándo quieras que ocurra el cambio
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', () => {
    const primeraSeccionBottom = primeraSeccion.getBoundingClientRect().bottom;
    if (primeraSeccionBottom > 0) {
        botonFlotante.style.opacity = '0';
        botonFlotante.style.visibility = 'hidden';
    } else {
        botonFlotante.style.opacity = '1';
        botonFlotante.style.visibility = 'visible';
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1); // Obtiene el id del destino
        const targetElement = document.getElementById(targetId);

        // Calcula el desplazamiento teniendo en cuenta la barra
        const offset = targetElement.offsetTop - document.querySelector(".header").offsetHeight;

        window.scrollTo({
            top: offset,
            behavior: "smooth" // Desplazamiento suave
        });
    });
});

window.onload = () => {
    const cabecera = document.querySelector(".cabecera");
    const botonFlotante = document.querySelector(".boton-flotante");
    cabecera.classList.add("visible");
    botonFlotante.classList.add("visible");
};

document.querySelector(".cabecera__logo_contenedor").addEventListener("click", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto
    const targetSection = document.querySelector("#top"); // Selecciona la sección de destino
    const offset = targetSection.offsetTop - document.querySelector(".header").offsetHeight; // Ajusta el desplazamiento por el header

    window.scrollTo({
        top: offset,
        behavior: "smooth", // Desplazamiento suave
    });
});