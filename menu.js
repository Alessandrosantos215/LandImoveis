
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menudois')


btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
















/*document.querySelector('.btn-abrir-menu').addEventListener('click', function() {
    document.querySelector('.menu-mobile').style.width = '70%';
    document.querySelector('.overlay-menudois').style.display = 'block'; // Mostra a sobreposição
});

document.querySelector('.btn-fechar').addEventListener('click', function() {
    document.querySelector('.menu-mobile').style.width = '0%';
    document.querySelector('.overlay-menudois').style.display = 'none'; // Oculta a sobreposição
});*/
