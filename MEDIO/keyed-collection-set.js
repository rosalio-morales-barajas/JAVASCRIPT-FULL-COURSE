const conjunto = new Set();

//console.log(conjunto);
//console.log(typeof conjunto);

conjunto.add(50);
//console.log(conjunto);
conjunto.add('pelos');
//console.log(conjunto);
conjunto.add({nombre: "Rosalio Morales", edad: 49, cel: 5545852});
//console.log(conjunto);

const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const conjunto2 = new Set(arreglo);
//console.log(conjunto2);


let numeros = [5, 10, 15,20, 3, 6, 9, 15, 12, 10, 5];
console.log(numeros);
let sinDuplicados = new Set(numeros);
console.log(sinDuplicados);


console.log(sinDuplicados.has(50));

for(const elemento of sinDuplicados){
    console.log(elemento);
}

sinDuplicados.delete(20);
console.log(sinDuplicados);

