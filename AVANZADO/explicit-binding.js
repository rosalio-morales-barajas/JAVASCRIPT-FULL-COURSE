
function saludar(){
    console.log("Hola "+this.nombre+" tienes "+this.edad);
}

let persona = {
    nombre: "Rosalio Morales",
    edad: 49
}

saludar.call(persona);