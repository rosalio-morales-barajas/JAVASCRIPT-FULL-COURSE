let objeto1 = {
    "name": "Objeto1"
}

let objeto2 = {
    "name": "Objeto2"
}

let referencia = objeto1;

console.log(objeto1);
console.log(referencia);
referencia = null;
console.log(referencia);
console.log(objeto1);