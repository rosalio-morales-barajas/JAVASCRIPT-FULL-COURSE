//LOs ambitos de las variables(Scope) en javascript  es el alcance de una variable.

//Ambito Global
let nombre = 'pelos';

function saludo(){
    console.log("Hola "+nombre);
}

function saludar(){
    console.log("Estoy saludando al "+nombre);
}

//saludar();
//saludo();
//console.log(nombre);

//Ambito local
function sumar(a, b){
    
    let resultado = a + b;
    return resultado;
}


var resultado = 900;

//console.log(resultado);

//console.log(sumar(5, 20));
//resta();

let numero = 10;

if(numero > 0){
    let mensaje = 'El numero es positivo...';
    console.log(mensaje);
}else{
    mensaje = 'El numero es negativo...';
    console.log(mensaje);
}

//console.log(mensaje);
console.log(numero);

