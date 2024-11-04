const menu = document.querySelector('.navegacion');
const abrirMenu = document.querySelector('.menu_icon');
const cerrarMenu = document.querySelector('.navegacion__icon');

abrirMenu.addEventListener('click', () => {
    menu.classList.add('visible');
});

cerrarMenu.addEventListener('click', () => {
    menu.classList.remove('visible');
});
