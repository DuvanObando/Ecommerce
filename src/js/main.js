/* Bibloteca de animcion filtro */
mixitup('.ecommerce__products', {
    selectors: {
        target: '.product',
    },
    animation: {
        duration: 300
    }
});

/* Funcion cerrar menu show */
function closeMenu() {
    menu.classList.toggle('menu__show')
}

/* Busqueda de clases para el menu show */
const iconClose = document.querySelector('.bx-x');
const iconOpen = document.querySelector('.bx-grid-alt');
const menu = document.querySelector('.menu');

/* Funcion del menu show */
[iconClose, iconOpen].forEach((icon) => {
    icon.addEventListener('click', closeMenu)
})

/* Busqueda de clases para cerrar el menu show mobile */
const menuExit = document.querySelectorAll('.navbar ul li');

/* Funcion cerrar menu show mobile */
for (const li of menuExit) {
    li.addEventListener('click', closeMenu)
}

/* Busqueda de clases para animacion navbar */
const headerNavbar = document.querySelector('.header__navbar');

/* Funcion de la animacion navbar */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerNavbar.classList.add('header__navbar-animation')
    } else {
        headerNavbar.classList.remove('header__navbar-animation')
    }
})

/* Busqueda de clases para tema oscuro */
const themeBtn = document.querySelector('.change-theme, #theme-button');

/* Funcion cambio de tema oscuro */
themeBtn.addEventListener('click', () => {
    themeBtn.classList.toggle('bx-sun')
    document.body.classList.toggle('dark-theme')
})

/* Busqueda de clases para animacion Icon */
const colorChangeIcon = document.querySelectorAll('.navbar__icons i');

/* Funcion de la animacion Icon */
for (const i of colorChangeIcon) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            i.classList.add('bx-animation')
        } else {
            i.classList.remove('bx-animation')
        }
    })
}

/* Funcion de la animacion Load */
window.addEventListener('load', () => {
    const load = document.querySelector('.load');

    setTimeout(() => {
        load.style.display = 'none'
    }, 5000)
})