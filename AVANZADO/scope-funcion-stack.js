/* 
Ambito global: el ambito predeterminadio para todo el codigo que se ejecuta en modo script.
Ambito del Modulo: el ambito del codigo que se ejecuta en modo modulo.
Ambito de funcion: el ambito creado con una funcion.
Ambito de bloque: el ambito creado con un par de llaves (un bloque).
*/

//Ambito global
let nombre = "pelos";

function saludar(){
    console.log("Hola "+nombre);
    //return "Hola "+nombre;
}

saludar();

//Ambito de Modulo
let modulo = require('./modulo.js');
/* modulo.saludarModulo();
modulo.mostrarCancion();
modulo.saludo('Regino');
modulo.sumar(900,1900);
modulo.mostrarCancion();  */

//Ambito de funcion
function sumar(a, b){
    let resultado = a + b;
    console.log(resultado);
}

//sumar(15, 30);
//console.log(resultado);


//Ambito de bloque
function mostrarNumeros(){
    for(let i = 1; i <= 10;i++){
        console.log(i);
    }
    //console.log(i);
}
mostrarNumeros();