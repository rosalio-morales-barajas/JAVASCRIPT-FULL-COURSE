//Variable numericas
var x = 50;
var y = 30;
var resultado = x > y ? "El primer numero es mayor..." : "El primer numero es menor";
//console.log(resultado); 

//Variables sin valor asignado
var sinValor;
//console.log(sinValor);

//Variables declaradas con valor nulo
var nulo = null;
//console.log(nulo);

//Objetos
persona = {
    nombre: "Rosalio Morales",
    edad: 49,
    raza: "Hispano"
}

//console.log(persona);
//console.log(persona.edad);

//Objetos con funciones internas
alumno = {
    nombre: "Pedro Vargas",
    edad: 45,
    ocupacion: "cantante",
    saludo: function(){
        console.log("Hola...mi nombre es: "+this.nombre,"mi edad es: "+this.edad,"y mi ocupacion es: "+this.ocupacion);
    },
    cancion: function(){
        console.log("...y que me sirvan para todo el dia, ya que mi Maria, no esta...");
    }
}
//alumno.saludo();
//console.log(alumno.ocupacion);
//alumno.cancion();

//Arreglos(Arrays)
var secuencia = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
console.log(secuencia);
console.log(secuencia[8]);
