//Error, TypeError, ReferenceError, RangeError

function dividir(a, b){
    if(b === 0){
        throw new RangeError("No se permite que el divisor sea cero(0)...verifique...");
    }else{
        console.log(a / b);
    }
}

//dividir(10,2);

function sumar(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new TypeError('Debe ingresar solo numeros...verifique...');
    }else{
        return a + b;
    }
}

console.log(sumar(30, 6));