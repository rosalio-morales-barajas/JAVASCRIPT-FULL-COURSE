//Una funcion callback es una funcion que se pasa como argumento a otra funcion y se ejecuta despues de que haya completado
//una tarea especifica.

function saludar(callback){
    let nombre = "Rosalio Morales Barajas";
    callback(nombre);
}


function presentacion(nombre){
    console.log("Hola, me permito presentarme a todos...me llamo "+nombre);
}

//saludar(presentacion);


function abriendoSobre(callback){
    let mensaje = "Hola estimado aspirante...nos complace informarte que has sido aceptado en la Universidad...Felicidades!!!...";
    callback(mensaje);
}

function abriendoMensaje(mensaje){
    console.log("Estoy abriendo el mensaje oculto...el mensaje dice: "+mensaje);
}

//abriendoSobre(abriendoMensaje);

function operaciones(callback){
    let a = 1255656;
    let b = 1654;
    let resultado = a + b;
    callback(a, b, resultado);
}

function suma(a, b, resultado){
    console.log("La suma de  "+a+" + "+b+" es: "+resultado);
}

operaciones(suma);