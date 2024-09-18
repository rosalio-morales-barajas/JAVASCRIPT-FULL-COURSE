//for...of -------> se utiliza para iterar sobre objetos iterables
let array = ["perro", "gato", "chivo", "leon", "cabra", "burro", "caballo"];

for(let elemento of array){
    //console.log(elemento);
}

let numeros = [1, 2, 3, 4, 5, 6, 7];

for(let numero of numeros){
    //console.log(numero);
}

let nombre = "Rosalio";

for(let letra of nombre){
    //console.log(letra);
}

let mapa = new Map([[5, "Regino"], [10, "Rosalio"], [15, "Morales"], [20, "Barajas"]]);

for(let [key, value] of mapa){
    //console.log(key, value);
}

const alumnos = new Map([['nombre', "Rosalio Morales"], ['edad', 49], ['direccion', "Calle de la Luz # 67 Centro"], ['tel', 5545852]]);
for(let [key, value] of alumnos){
    //console.log(key, value);
}

