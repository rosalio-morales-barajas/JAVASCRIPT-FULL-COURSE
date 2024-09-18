
const jsonString = '{"nombre": "Rosalio Morales Barajas", "edad": 49, "oficio": "Desarrollador"}';

console.log( typeof jsonString);
//console.log(jsonString);
const objetoJSON = JSON.parse(jsonString);
console.log(typeof objetoJSON);
/*console.log(objetoJSON);
console.log(objetoJSON.nombre);
console.log(objetoJSON.edad);
console.log(objetoJSON.oficio);  */

//Convertir un objeto de javascript a JSON
const persona = {
    nombre: "pelos",
    edad: 45,
    oficio: "Desarrollador"
}

console.log(typeof persona);

const objetoCovertidoAJSON = JSON.stringify(persona);

console.log(typeof objetoCovertidoAJSON);
console.log(objetoCovertidoAJSON);
