class Curso {
    constructor(imagen, titulo,precioOriginal, precio, id, cantidad){
        this.imagen = imagen;
        this.titulo = titulo;
        this.precioOriginal = precioOriginal;
        this.precio = precio;
        this.id = id;
        this.cantidad = cantidad
    }
}

class baseDeCursos {
    constructor(cursos){
        this.cursos = cursos;
    }
    agregar(cursoNuevo){
        this.cursos.push(cursoNuevo);
    }
}

class Carrito {
    constructor(cursoselegidos){
        this.cursoselegidos = cursoselegidos;
    }
    agregar(cursoNuevo){
        this.cursoselegidos.push(cursoNuevo);
    }
}

const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let articulosCarrito = new Carrito([]);
let bdc = new baseDeCursos([])

cargarEventListeners();

function cargarEventListeners() {
    listaCursos.addEventListener('click', agregarCurso);
    //carrito.addEventListener('click', eliminarCurso);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function inicializar (){
    let imagen = 'img/curso1.jpg';
    let titulo = 'HTML5, CSS3, JavaScript para Principiantes';
    let precioOriginal = 200;
    let precio = 15;
    let id = 1;
    let cantidad = 0
    let nuevo = new Curso(imagen, titulo, precioOriginal, precio, id, cantidad);
    bdc.agregar(nuevo);

    let imagen1 = 'img/curso2.jpg';
    let titulo1 = 'Curso de Comida Vegetariana';
    let precioOriginal1 = 200;
    let precio1 = 15;
    let id1 = 2;
    let cantidad1 = 0
    let nuevo1 = new Curso(imagen1, titulo1, precioOriginal1, precio1, id1, cantidad1);
    bdc.agregar(nuevo1);

    let imagen2 = 'img/curso3.jpg';
    let titulo2 = 'Guitarra para Principiantes';
    let precioOriginal2 = 200;
    let precio2 = 15;
    let id2 = 3;
    let cantidad2 = 0
    let nuevo2 = new Curso(imagen2, titulo2, precioOriginal2, precio2, id2, cantidad2);
    bdc.agregar(nuevo2);
}

function cargarCursos(){
    let resultado = document.getElementById("cards");
    //document.getElementById("cards").innerHTML = ""
    bdc.cursos.forEach(cursos => resultado.innerHTML += `
    <div class="four columns">
    <div class="card">
        <img src=${cursos.imagen} class="imagen-curso u-full-width">
        <div class="info-card">
            <h4>${cursos.titulo}</h4>
            <p>Juan Pedro</p>
            <img src="img/estrellas.png">
            <p class="precio">$${cursos.precioOriginal}<span class="u-pull-right ">$${cursos.precio}</span></p>
            <a href="#" onclick="agregarCurso(this.id)" class="u-full-width button-primary button input agregar-carrito" data-id="${cursos.id}" id="${cursos.id}">Agregar Al Carrito</a>
        </div>
    </div> <!--.card-->
    </div>
    `);
    console.log('Carga de Cursos terminada')
}

function agregarCurso(id){
    function check() {
        return identificador = parseInt(id);
    }
    
    const foundCurso = bdc.cursos.findIndex(res => {
        //console.log(`res.id:${res.id} // id:${id}`);
        res.id = parseInt(res.id);
        return res.id === check();
    })
    
    const foundCarrito = articulosCarrito.cursoselegidos.findIndex(res => {
        //console.log(`res.id:${res.id} // id:${id}`);
        res.id = parseInt(res.id);
        return res.id === check();
    })
    

    if( articulosCarrito.cursoselegidos.some(cursoselegidos => cursoselegidos.id === check() ) ) { 
        articulosCarrito.cursoselegidos.map(res => {
            if(res.id === check()) {
                articulosCarrito.cursoselegidos[foundCarrito].cantidad++;
                console.log(`Cantidad Modificada:`);
                console.table(articulosCarrito.cursoselegidos);
                return res;
             } else {
                return res;
          }
       })
    }else{
        let imagen = bdc.cursos[foundCurso].imagen;
        let titulo = bdc.cursos[foundCurso].titulo;
        let precioOriginal = bdc.cursos[foundCurso].precioOriginal;
        let precio = bdc.cursos[foundCurso].precio;
        id = bdc.cursos[foundCurso].id;
        let cantidad = 1;
        let nuevo = new Curso(imagen, titulo, precioOriginal, precio, id, cantidad);
        articulosCarrito.agregar(nuevo)

        console.log(`Nuevo Curso en carrito:`);
        console.table(articulosCarrito.cursoselegidos);
    }
    carritoHTML()
}

function carritoHTML() {
    console.log('Escribiendo carrito html');
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

    articulosCarrito.cursoselegidos.forEach(cursoselegidos => {
         const row = document.createElement('tr');
         row.innerHTML = `
              <td>  
                   <img src="${cursoselegidos.imagen}" width=100>
              </td>
              <td>${cursoselegidos.titulo}</td>
              <td>${cursoselegidos.precio}</td>
              <td>${cursoselegidos.cantidad} </td>
              <td>
                   <a href="#" class="borrar-curso" data-id="${cursoselegidos.id}">X</a>
              </td>
         `;
         contenedorCarrito.appendChild(row);
    });

}

function vaciarCarrito() {
    while(contenedorCarrito.firstChild) {
         contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    articulosCarrito.cursoselegidos = [];
    console.table(articulosCarrito);
}

console.table(bdc);