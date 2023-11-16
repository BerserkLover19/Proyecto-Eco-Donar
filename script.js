function enviarFormulario() {
    var Nombre=
    document.getElementById('Nombre').value;
    var Apellido=
    document.getElementById('Apellido').value;
    var gmail=
    document.getElementById('gamil').value;
    var Comentarios=
    document.getElementById('Comentarios').value;


    if (Nombre === '' || Apellido === '' || gmail === '' || Comentarios === '' ) {
        alert('Por favor completa todos los campos obligatorios.');
    } else {
        alert('¡Formulario enviado con éxito!');
    
    } 
    window.location.href = 'https://127.0.0.1:5500/index.html';
}








document.addEventListener('DOMContentLoaded',function () {
    const toggleButton =
    document.getElementById('toggle-menu');
    const nav =
    document.querySelector('nav');
    


    toggleButton.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.classList.remove('show');
        }
    });
    nav.addEventListener('click',function (event) {
        if (event.target.tagName === 'A') {
            nav.classList.remove('show');
        }
    });
    });












