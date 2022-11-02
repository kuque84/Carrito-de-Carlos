window.addEventListener('load', iniciar, false);

 function iniciar() {
     var boton = document.getElementById('boton');
     boton.addEventListener('click', clickBoton, false);
 }

 function clickBoton(evento) {
     console.log(evento.target);
 }
<button id="boton">Prueba</button>