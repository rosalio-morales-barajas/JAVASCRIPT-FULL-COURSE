
const persona = {
    nombre: "Rosalio Morales",
    edad: 49
};

const persona2 = {
    nombre: "Rosalio Morales",
    edad: 49
};

const persona3 = persona;

/* persona3.direccion = "Calle azucenas # 78 Centro";
console.log(persona3)
console.log(persona)
console.log(typeof persona3); 
console.log(Object.is(persona, persona2))  
console.log(Object.is(persona, persona3))  */

//const comparacion = persona.nombre === persona2.nombre;
//console.log(comparacion);
const _ =  require('lodash');
const iguales = _.isEqual(persona, persona2);
console.log(iguales);

