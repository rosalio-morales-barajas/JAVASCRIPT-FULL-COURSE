
function sumar(){
    let resultado = 0;
    for(let i = 0;i < arguments.length;i++){
        resultado += arguments[i];
    }
    //console.log(resultado);
    return resultado;
}

//console.log(sumar(5, 10, 15, 20, 25, 30));

//console.log(sumar(3, 6, 9, 12, 15, 18));

function prueba(){
    console.log(arguments);
}

//prueba('Rosalio Morales', 49, "Calle de las flores # 89 Las aguilas");