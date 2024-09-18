function suma(a, b){
    return a + b;
}

let sumar = suma(600, 500);
//console.log(sumar);

function esPar(x){
    if(x % 2 == 0){
        return true;
    }else{
        return false;
    }
}

let parOImpar = esPar(60);
console.log(parOImpar);

let revisar = esPar(198);
console.log(revisar);

let mirar = esPar(394);
console.log(mirar);

console.log(esPar(185));