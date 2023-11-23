const iconoButton = document.querySelector(".navbar-icono");
const navbar = document.querySelector(".navbar");

function toggleNavbarLinks() {
    navbar.classList.toggle("active");
}

iconoButton.addEventListener("click", toggleNavbarLinks);


function enviarFormulario() {
    var Nombre=
    document.getElementById('Nombre').value;
    var Apellido=
    document.getElementById('Apellido').value;
    var gmail=
    document.getElementById('email').value;
    var Comentarios=
    document.getElementById('Comentarios').value;
    var FundacionONG=
    document.getElementById('FundacionONG').value;


    if (Nombre === '' || Apellido === '' || gmail === '' || Comentarios === '' || FundacionONG === '' ) {
        alert('Por favor completa todos los campos obligatorios.');
    } else {
        alert('¡Formulario enviado con éxito!');
    
    } 
    window.location.href = 'contacto.html';
}