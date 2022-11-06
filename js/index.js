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

function inicializar (){
    let imagen1 = 'img/curso1.jpg';
    let titulo1 = 'HTML5, CSS3, JavaScript para Principiantes';
    let precioOriginal1 = 200;
    let precio1 = 15;
    let id1 = 1;
    let cantidad1 = 0;
    let nuevo1 = new Curso(imagen1, titulo1, precioOriginal1, precio1, id1, cantidad1);
    bdc.agregar(nuevo1);
    
    let imagen2 = 'img/curso2.jpg';
    let titulo2 = 'Curso de Comida Vegetariana';
    let precioOriginal2 = 200;
    let precio2 = 15;
    let id2 = 2;
    let cantidad2 = 0;
    let nuevo2 = new Curso(imagen2, titulo2, precioOriginal2, precio2, id2, cantidad2);
    bdc.agregar(nuevo2);

    let imagen3 = 'img/curso3.jpg';
    let titulo3 = 'Guitarra para Principiantes';
    let precioOriginal3 = 200;
    let precio3 = 15;
    let id3 = 3;
    let cantidad3 = 0;
    let nuevo3 = new Curso(imagen3, titulo3, precioOriginal3, precio3, id3, cantidad3);
    bdc.agregar(nuevo3);

    let imagen4 = 'img/curso4.jpg';
    let titulo4 = 'Huerto en tu casa';
    let precioOriginal4 = 200;
    let precio4 = 15;
    let id4 = 4;
    let cantidad4 = 0;
    let nuevo4 = new Curso(imagen4, titulo4, precioOriginal4, precio4, id4, cantidad4);
    bdc.agregar(nuevo4);

    let imagen5 = 'img/curso5.jpg';
    let titulo5 = 'Decoración con productos de tu hogar';
    let precioOriginal5 = 200;
    let precio5 = 15;
    let id5 = 5;
    let cantidad5 = 0;
    let nuevo5 = new Curso(imagen5, titulo5, precioOriginal5, precio5, id5, cantidad5);
    bdc.agregar(nuevo5);

    let imagen6 = 'img/curso1.jpg';
    let titulo6 = 'Diseño Web para Principiantes';
    let precioOriginal6 = 200;
    let precio6 = 15;
    let id6 = 6;
    let cantidad6 = 0;
    let nuevo6 = new Curso(imagen6, titulo6, precioOriginal6, precio6, id6, cantidad6);
    bdc.agregar(nuevo6);

    let imagen7 = 'img/curso2.jpg';
    let titulo7 = 'Comida Mexicana para principiantes';
    let precioOriginal7 = 200;
    let precio7 = 15;
    let id7 = 7;
    let cantidad7 = 0;
    let nuevo7 = new Curso(imagen7, titulo7, precioOriginal7, precio7, id7, cantidad7);
    bdc.agregar(nuevo7);

    let imagen8 = 'img/curso3.jpg';
    let titulo8 = 'Estudio Musical en tu casa';
    let precioOriginal8 = 200;
    let precio8 = 15;
    let id8 = 8;
    let cantidad8 = 0;
    let nuevo8 = new Curso(imagen8, titulo8, precioOriginal8, precio8, id8, cantidad8);
    bdc.agregar(nuevo8);

    let imagen9 = 'img/curso4.jpg';
    let titulo9 = 'Cosecha tus propias frutas y verduras';
    let precioOriginal9 = 200;
    let precio9 = 15;
    let id9 = 9;
    let cantidad9 = 0;
    let nuevo9 = new Curso(imagen9, titulo9, precioOriginal9, precio9, id9, cantidad9);
    bdc.agregar(nuevo9);

    let imagen10 = 'img/curso5.jpg';
    let titulo10 = 'Prepara galletas caseras';
    let precioOriginal10 = 200;
    let precio10 = 15;
    let id10 = 10;
    let cantidad10 = 0;
    let nuevo10 = new Curso(imagen10, titulo10, precioOriginal10, precio10, id10, cantidad10);
    bdc.agregar(nuevo10);

    let imagen11 = 'img/curso1.jpg';
    let titulo11 = 'JavaScript Moderno con ES6';
    let precioOriginal11 = 200;
    let precio11 = 15;
    let id11 = 11;
    let cantidad11 = 0;
    let nuevo11 = new Curso(imagen11, titulo11, precioOriginal11, precio11, id11, cantidad11);
    bdc.agregar(nuevo11);

    let imagen12 = 'img/curso2.jpg';
    let titulo12 = '100 Recetas de Comida Natural';
    let precioOriginal12 = 200;
    let precio12 = 15;
    let id12 = 12;
    let cantidad12 = 0;
    let nuevo12 = new Curso(imagen12, titulo12, precioOriginal12, precio12, id12, cantidad12);
    bdc.agregar(nuevo12);

}

function cargarCursos(){
    console.log(bdc.cursos.length);
    let indice = 0;
    let html = "";
    let card = document.getElementById("cards");
    /*
    bdc.cursos.forEach(cursos => {card.innerHTML += `
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
                    </div>`;})
    */
   
    bdc.cursos.forEach(cursos => {
        indice++;
        if (indice == 1){
            //card.innerHTML += `
            html += `
            <div class="row">
                <div class="four columns" indice="${indice}">
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
                <!--    inicio div row por ser primero  -->`;
        } else if((indice % 3 ) == 0){
            //card.innerHTML += `
            html += `
                <div class="four columns" indice="${indice}">
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
            </div>
            <!--    fin div row  -->`;
        }else if(((indice - 1) % 3 ) == 0){
            //card.innerHTML += `
            html += `
            <div class="row">
                <div class="four columns" indice="${indice}">
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
                <!--    incio div row  -->`;
        }else if(indice == bdc.cursos.length){
            //card.innerHTML += `
            html += `
            <div class="four columns" indice="${indice}">
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
        </div>
        <!--    fin div row por ultimo elemento  -->`;
        }else{
            //card.innerHTML += `
            html += `
            <div class="four columns" indice="${indice}">
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
            <!--    div normal  -->`;
        }
    })
    card.innerHTML = html;
}
function agregarCurso(id){
    function checkId() {
        return identificador = parseInt(id);
    }
    
    const foundCurso = bdc.cursos.findIndex(res => {
        //console.log(`res.id:${res.id} // id:${id}`);
        res.id = parseInt(res.id);
        return res.id === checkId();
    })
    
    const foundCarrito = articulosCarrito.cursoselegidos.findIndex(res => {
        //console.log(`res.id:${res.id} // id:${id}`);
        res.id = parseInt(res.id);
        return res.id === checkId();
    })
    

    if( articulosCarrito.cursoselegidos.some(cursoselegidos => cursoselegidos.id === checkId() ) ) { 
        articulosCarrito.cursoselegidos.map(res => {
            if(res.id === checkId()) {
                articulosCarrito.cursoselegidos[foundCarrito].cantidad++;
                console.log(`Cantidad Modificada:`);
                console.table(articulosCarrito.cursoselegidos);
                return res;
            } else {
                return res;
            }
       })
    }else{
        /*
        let imagen = bdc.cursos[foundCurso].imagen;
        let titulo = bdc.cursos[foundCurso].titulo;
        let precioOriginal = bdc.cursos[foundCurso].precioOriginal;
        let precio = bdc.cursos[foundCurso].precio;
        id = bdc.cursos[foundCurso].id;
        let cantidad = 1;
       
        let nuevo = new Curso(imagen, titulo, precioOriginal, precio, id, cantidad);
        articulosCarrito.agregar(nuevo)
        */
        //console.table(bdc.cursos[foundCurso]);
        bdc.cursos[foundCurso].cantidad++;
        articulosCarrito.agregar(bdc.cursos[foundCurso]);  

        console.log(`Nuevo Curso en carrito:`);
        console.table(articulosCarrito);
    }
    carritoHTML()
}

function carritoHTML() {
    let total = 0;
    console.log('Escribiendo carrito html');
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

    articulosCarrito.cursoselegidos.forEach(cursoselegidos => {
        total = total + (parseInt(cursoselegidos.precio) * parseInt(cursoselegidos.cantidad));
         const row = document.createElement('tr');
         row.innerHTML = `
              <td>  
                   <img src="${cursoselegidos.imagen}" width=100>
              </td>
              <td>${cursoselegidos.titulo}</td>
              <td>$${cursoselegidos.precio}</td>
              <td>${cursoselegidos.cantidad} </td>
              <td>
                <a href="#" onclick="eliminarCurso(this.id)" class="borrar-curso" data-id="${cursoselegidos.id}" id="${cursoselegidos.id}">X</a>
              </td>
         `;
         contenedorCarrito.appendChild(row);
    });
    document.getElementById("total").innerHTML = `Total: $${total}`
    console.log(total);
}

function vaciarCarrito() {
    while(contenedorCarrito.firstChild) {
         contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    articulosCarrito.cursoselegidos = [];
    console.table(articulosCarrito);
}

function eliminarCurso(id) {
        /*
        function checkId() {
            return identificador = parseInt(id);
        }
        const foundCarrito = articulosCarrito.cursoselegidos.findIndex(res => {
            //console.log(`res.id:${res.id} // id:${id}`);
            res.id = parseInt(res.id);
            return res.id === checkId();
        })*/
        const foundCarrito = articulosCarrito.cursoselegidos.findIndex(res => parseInt(res.id) === parseInt(id))
    //console.table(articulosCarrito.cursoselegidos[foundCarrito]);
    articulosCarrito.cursoselegidos.splice(foundCarrito, 1);

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    carritoHTML();
}

function comprar(){
    console.log(...articulosCarrito.cursoselegidos);
}
console.table(bdc);