document.addEventListener('DOMContentLoaded', function () {
    const iconoButton = document.querySelector(".navbar-icono");
    const navbar = document.querySelector(".navbar");
    const botonesDonacion = document.querySelectorAll('.botonDonacion');
    const customDonationInput = document.getElementById('customDonation');
    const tipoDonacionRadios = document.querySelectorAll('input[name="tipoDonacion"]');
    const overlay = document.getElementById('overlay');

    function toggleNavbarLinks() {
        navbar.classList.toggle("active");
    }
    
    function toggleSeleccion(event) {
        botonesDonacion.forEach(boton => {
            boton.classList.remove('seleccionado');
        });

        event.target.classList.add('seleccionado');
    }

    botonesDonacion.forEach(boton => {
        boton.addEventListener('click', toggleSeleccion);
    });

    function mostrarCartel() {
        overlay.style.display = 'flex';
    }

    function celebrar(event) {
        let donacionSeleccionada = false;
        let tipoDonacionSeleccionada = false;
        let botonInputSeleccionado = false;
        let mostrarError = false;

        botonesDonacion.forEach(boton => {
            if (boton.classList.contains('seleccionado')) {
                donacionSeleccionada = true;
                if (boton.querySelector('.customDonationInput')) {
                    const customDonationInput = boton.querySelector('.customDonationInput');
                    if (customDonationInput.value === '') {
                        mostrarError = true;
                    } else {
                        botonInputSeleccionado = true;
                    }
                }
            }
        });

        tipoDonacionRadios.forEach(radio => {
            if (radio.checked) {
                tipoDonacionSeleccionada = true;
            }
        });

        const enviarButton = event.target;
        const overlay = document.getElementById('overlay');

        if (mostrarError) {
            alert('Por favor, ingrese un valor valido a donar.');
        } else if ((customDonationInput.value !== '' || (donacionSeleccionada && !botonInputSeleccionado)) && tipoDonacionSeleccionada) {
            enviarButton.classList.add('clicked');
            setTimeout(() => {
                enviarButton.classList.remove('clicked');
            }, 300);
            setTimeout(mostrarCartel, 300);
        } else {
            alert('Por favor, seleccione un valor para la donación y elija una opción para esta (única o mensual).');
        }
    }

    function cerrarPopup() {
        overlay.style.display = 'none';
    }

    const enviarButton = document.querySelector('.boton');
    enviarButton.addEventListener('click', celebrar);

    const cerrarButton = document.querySelector('#popup button');
    cerrarButton.addEventListener('click', cerrarPopup);

    iconoButton.addEventListener("click", toggleNavbarLinks);
});
