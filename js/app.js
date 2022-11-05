// Declaro Variables
const carrito = document.querySelector('#carrito'); // metodo primer elemento del
// doc. que coicide con el selector
const listaCursos = document.querySelector('#lista-cursos');//idem
const contenedorCarrito = document.querySelector('#lista-carrito tbody');//idem
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); //idem
//let articulosCarrito = [];//array vacio recordar el uso en ejercico anterior

// Listeners escucho 
cargarEventListeners();
// hacemos tres listeners
function cargarEventListeners() {
     //no hacemos una funcion grande sino que 
     //haremos algunas para favoreces comprención 
     // Dispara cuando se presiona "Agregar Carrito"
     listaCursos.addEventListener('click', agregarCurso);//
     //metodo que indica al navegador que este atento a la interacción del usuario
     //escuchandooooo
     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarCurso);
     //escuchandooooo
     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}
//nueva clase hay que crear parametro name que indique nombre del curso


class Curso {
    constructor(imagen, titulo, precio, id, cantidad){
        this.imagen = imagen;
        this.titulo = titulo;
        this.precio = precio;
        this.id = id;
        this.cantidad = cantidad;
    }
}

class Carrito {
    constructor(cursos){
        this.cursos = cursos;
    }
    agregar(cursoNuevo){
        this.cursos.push(cursoNuevo);
    }
}

let articulosCarrito = new Carrito([]);

/*
class curso{
     constructor(){
          this.nombre= nombre;
          this.info= infoCurso;
          this.precio= precio;
  }

     }

     const curso= new curso();
     console.log(curso.name, curso.infoCurso, curso.precio);

  //Mapa muestra numero de cursos agregados al carrito
     const conteoCarrito= articulosCarrito.map(x => x+1)
     console.log(conteoCarrito);

*/
// Funciones
// Función que añade el curso al carrito
function agregarCurso(e) {
     //e.preventDefault();
     // Delegation para agregar-carrito
     if(e.target.classList.contains('agregar-carrito')) {
          const curso = e.target.parentElement.parentElement;
          // Enviamos el curso seleccionado para tomar sus datos
          console.log(curso)
          leerDatosCurso(curso);
          console.log(curso)
     }

}


// Lee los datos del curso
function leerDatosCurso(curso) {
     
     const infoCurso = {
          imagen: curso.querySelector('img').src,
          titulo: curso.querySelector('h4').textContent,
          precio: curso.querySelector('.precio span').textContent,
          id: curso.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }
     
    /*
     let imagen = curso.querySelector('img').src
     let titulo = curso.querySelector('h4').textContent
     let precio = curso.querySelector('.precio span').textContent
     let id = curso.querySelector('a').getAttribute('data-id')
     let cantidad = 1
     */
     if( articulosCarrito.cursos.some( cursos => cursos.id === infoCurso.id ) ) { 
          
          articulosCarrito.cursos = articulosCarrito.cursos.map( Curso => {
               if( Curso.id === infoCurso.id ) {
                    Curso.cantidad++;
                     return Curso;
                } else {
                     return Curso;
             }
          })
          
          //articulosCarrito = [...cursos];
          console.log(`Modificada cantidad ${articulosCarrito.cursos}`);
          
     }  else {
          //articulosCarrito = [...articulosCarrito.cursos, infoCurso];
          //estearray = [...articulosCarrito, infoCurso];
          
          let imagen = curso.querySelector('img').src
          let titulo= curso.querySelector('h4').textContent
          let precio= curso.querySelector('.precio span').textContent
          let id= curso.querySelector('a').getAttribute('data-id')
          let cantidad= 1

          let nuevo = new Curso(imagen, titulo, precio, id, cantidad);
          articulosCarrito.agregar(nuevo);   
          console.log(`Nuevo ${articulosCarrito.cursos.Curso}`);
     }

     carritoHTML();
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso') ) {
          // e.target.parentElement.parentElement.remove();
          const cursoId = e.target.getAttribute('data-id')
          
          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.cursos.filter(Curso => Curso.id !== cursoId);

          carritoHTML();
     }
}


// Muestra el curso seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.cursos.forEach(cursos => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${Curso.imagen}" width=100>
               </td>
               <td>${cursos.titulo}</td>
               <td>${cursos.precio}</td>
               <td>${cursos.cantidad} </td>
               <td>
                    <a href="#" class="borrar-curso" data-id="${cursos.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });

}


// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
     // forma lenta
     // contenedorCarrito.innerHTML = '';


     // forma rapida (recomendada)
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}