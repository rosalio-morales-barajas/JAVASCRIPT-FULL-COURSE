

function Nota(titulo, contenido){
    this.titulo = titulo;
    this.contenido = contenido;
}

//Aqui guardaremos las notas agregadas
function LibretaNotas(){
    this.notas = [];
}

//Aqui creamos un metodo para el objeto LibretaNotas usando prototype
LibretaNotas.prototype.obtenerNota = function(indice){
    return this.notas[indice];
} 

//Aqui creamos el metodo obtenerNotas usando prototype
LibretaNotas.prototype.obtenerNotas = function(){
    return this.notas;
}

//Aqui creamos el metodo agregarNota usando prototype
LibretaNotas.prototype.agregarNotas = function(titulo, contenido){
    const nota =  new Nota(titulo, contenido);
    this.notas.push(nota);
}


//Aqui creamos el metodo borrarNota usando prototype
LibretaNotas.prototype.borrarNota = function(indice){
    this.notas.splice(indice, 1);
}


let libreta = new LibretaNotas();
libreta.agregarNotas("indice 1", "Aprendiendo Javascript");
libreta.agregarNotas("indice 2", "Aprendiendo python 2");
libreta.agregarNotas("indice 3", "Aprendiendo Java 3");
libreta.agregarNotas("indice 4", "Aprendiendo Html 1");

console.log(libreta.obtenerNota(2));

console.log(libreta.obtenerNotas());

libreta.borrarNota(3);

console.log(libreta.obtenerNotas());



