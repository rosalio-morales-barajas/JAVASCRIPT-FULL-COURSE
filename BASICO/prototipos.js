

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function(){
    console.log('Hola a todos...me llamo '+this.nombre+',y mi edad es '+this.edad);
}

let persona1 = new Persona('Pedro Juarez', 23);
let persona2 = new Persona('Joaquin Reyna', 45);

console.log(persona1);
console.log(persona2);

console.log(persona1.saludar());
console.log(persona2.saludar())







