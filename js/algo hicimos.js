//hasta aca llegamos
//Agregar elementos al carrito

 //Y voy a tomar una copia de lo que hay en 
//el carrito este vacio o tenga 10 o 20 , y le agrgo el objeto "ingfoCurso"


articulosCarrito = [...articulosCarrito, infoCurso];
console.log(articulosCarrito)
carritoHTML();


// Ahora mostramos en el HTML vamos a usar 
//el carrito ya creado "articulosCarrito" va a generarlo basado en el
//vamos a iterara con foreach, recoremos el arreglo con funcion flecha por
//cada carrito
function carritoHTML() {
          articulosCarrito.forEach(curso  => {
               const row = document.createElement('tr');
               //inyectamos condigo HTML en el tbody
               //armanmos un template de string
               row.innerHTML =`     
               
               <td>${curso.titulo}</td>

               `;
          contenedorCarrito.appendChild(row);
               
               
               

          })
}
// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso') ) {
          // e.target.parentElement.parentElement.remove();
          const cursoId = e.target.getAttribute('data-id')
          
          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

          carritoHTML();
     }
}

function agregarCurso(e) {
     e.preventDefault();
     // Delegation para agregar-carrito
     if(e.target.classList.contains('agregar-carrito')) {
          const curso = e.target.parentElement.parentElement;
     
          console.log(curso)
          leerDatosCurso(curso);
     }
}