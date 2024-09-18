let mensaje = "Hola, saludando desde el modulo...";
let cancion = "\nCon los brazos de la fiebre\nque aun abarcan mi frente, lo he pensado mejor\ny desatare las serpientes de la vanidad...";



function saludarModulo(){
    console.log(mensaje);
}


function mostrarCancion(){
    console.log(cancion);
}

//let saludo = (nombre) => `Hola ${nombre}, bienvenido al mundo de la programacion...`;

function saludo(nombre){
    console.log("Hola "+nombre+" bienvenido a clases...");
}

function sumar(x, y){
    console.log(x + y);
}

function restar(a, b){
     console.log(a - b);
}

module.exports = {
    mostrarCancion,
    saludarModulo,
    saludo,
    sumar,
   restar
};
