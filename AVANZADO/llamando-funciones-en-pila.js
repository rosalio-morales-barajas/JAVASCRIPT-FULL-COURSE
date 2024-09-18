function saludar(nombre){
    console.log("Hola "+nombre);
}

function despedir(nombre){
    console.log("Adios "+nombre);
}

function conversacion(nombre){
    console.log("Iniciando conversacion con "+nombre);
    saludar(nombre);
    despedir(nombre);
    console.log("Conversacion finalizada con "+nombre);
}

/* saludar("Rosalio");
despedir("Rosalio");
conversacion("Rosalio");  */

conversacion("Rosalio");