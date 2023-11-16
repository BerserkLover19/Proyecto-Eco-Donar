const iconoButton = document.querySelector(".navbar-icono");
const navbar = document.querySelector(".navbar");

function toggleNavbarLinks() {
    navbar.classList.toggle("active");
}

iconoButton.addEventListener("click", toggleNavbarLinks);

function celebrar() {
    const boton = document.querySelector('.boton');
    boton.classList.add('celebracion');

    setTimeout(function () {
        boton.classList.remove('celebracion');
    }, 1000);
}
