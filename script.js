//crear una funtion constructiora para los objetos libros
function Libro (titulo, autor, agno, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.agno = agno;
    this.genero = genero;
}
 
//crear un arreglo con los objetos (instancia)
let libros = [
    new Libro ('Harry Potter y la Piedra Filosofal', 'J.K. Rowling', 1997, 'Fantasía'),
    new Libro ('El Señor de los Anillos', 'J.R.R. Tolkien', 1954, 'Fantasía'),
    new Libro ('Las Crónicas de Narnia', 'C.S. Lewis', 1950, 'Fantasía'),
    new Libro ('El Hobbit', 'J.R.R. Tolkien', 1937, 'Fantasía'),
    new Libro ('La Madriguera Del Zorro (Oce)', 'Sakavic', 2022, 'Juvenil'),
    new Libro ('Papelucho', 'Marcela Paz', 2017, 'Ficción')
];
 
$(document).ready(function() {
    //funtion para mostrar los libros en el html
    function mostrarLibros (libros) {
            //alert("Hola!");
            //se obtiene el elemento de la lista html ocupando Jquery "$"
            let lista = document.getElementById('listaDeLibros');
 
            lista.innerHTML = '';
 
            for (let i = 0; i < libros.length; i++) {
                let libro = libros[i];
                let listaLi = document.createElement('li');
                listaLi.innerHTML = libro.titulo + " - " + libro.autor + " - " + libro.agno + " - " + libro.genero;
               
                lista.appendChild(listaLi);
               
            }
        }
 
        function buscarLibros(){
           let buscar = document.getElementById('buscar').value.toUpperCase();
           
           let filtro = libros.filter(function(libro){
            let agnoComoTexto = libro.agno.toString();
            let buscarFiltro = libro.titulo.toUpperCase().includes(buscar) ||
            libro.genero.toUpperCase().includes(buscar) || libro.autor.toUpperCase().includes(buscar) ||
            agnoComoTexto.includes(buscar);
            return buscarFiltro;
           });        
           
           mostrarLibros(filtro);
 
        }
       
        mostrarLibros(libros);
        $('#buscar').on('input', buscarLibros);
});
 
