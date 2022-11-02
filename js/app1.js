//Buneas tardes alumnos...
//este es el ejercicio.
//definimos variables.
const carrito = document.querySelector('#carrito');
//Usar el mismo nombre del HTML, cuidado.
const listaCursos = document.querySelector('#lista-cursos');
//idem
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
//etiqueta que esta en la plantilla y hace referencia a la tabla ver pdf
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
//ahora hacemos un array
let articulosCarrito = []; //igual a ejercicios que vimos vacio para simular llenar el carrito

//escuchamos con listeners
cargarEventListeners();
function cargarEventListeners() {
     //no hacemos una funcion grande sino que haremos algunas funciones.
     //Esta anterior se dispara cuando prsionamos "Agregar Carrito"en html
     //vean en bilbiografia que pueden probar en cada paso por consola con 
     //console.log
     listaCursos.addEventListener('click', agregarCurso);
     //estaremos atentos al usuario si hace click agregamos curso
     carrito.addEventListener('click', eliminarCurso);
     //Eliminamos el curso
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
     //aca vaciamos el carrito 

}
//Funciones
//Funcion que aniade curso al carrito
function agregarCurso(e) { //uso e acordarde material enterior
               e.preventDefault() //para que no se mueva la pagina despues del click
               //vamos a hacer una busqueda para agregar y usamos condicional if para 
               //ver si se cumple condicion
               if(e.target.classList.contains('agregar-carrito')){
                    const curso = e.target.parentElement.parentElement;
                    //recorro las etiquetas de acuerdo a la jerarquia y busco 
                    //seleciono el curso
                    //para ver lo que hace puedo agregar
                    console.log(curso) //luego lo saco, pero 
                    //me motrara si funciona el desarrllo y me indica donde buscara
                    //la info
                    
               leerDatosCurso(curso);
               }

}
function leerDatosCurso(curso) {
     //creare objeto
     const infoCurso = {
          imagen: curso.querySelector('img').src, //busco source la fuente de la imagen el path
          titulo: curso.querySelector('h4').textContent,//saco el contenido con textcontent
          // en este caso del h4
          precio: curso.querySelector('.precio span').textContent,
          id: curso.querySelector('a').getAttribute('data-id'),//le damos que use el data id que traiga 
          //los atributos.
          cantidad: 1 //una constante para que empiece con uno en el carrito.
     
     }

// hasta aca llegamos
//Agregar elementos al carrito

 //Y voy a tomar una copia de lo que hay en 
//el carrito este vacio o tenga 10 o 20 , y le agrgo el objeto "ingfoCurso"


articulosCarrito = [...articulosCarrito, infoCurso];
console.log(articulosCarrito)
carritoHTML();
}

// Ahora mostramos en el HTML vamos a usar 
//el carrito ya creado "articulosCarrito" va a generarlo basado en el
//vamos a iterar con foreach, recorremos el arreglo con funcion flecha por
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
