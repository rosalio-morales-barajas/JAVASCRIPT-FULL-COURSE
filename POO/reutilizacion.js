
function operaciones_basicas(shape, ...args){

    let resultado = 0;

    switch(shape){

        case "sumar":
            resultado = args.reduce((total, numero) => total + numero);
            break;
        case "restar":
            resultado = args.reduce((total, numero) => total - numero);
            break;
        case "multiplicar":
            resultado = args.reduce((total, elemento) => total * elemento);
            break;
        case "dividir":
            resultado = args.reduce((total, elemento) => total / elemento);
            break; 
        default:
            resultado = "Ingrese sumar, restar, multiplicar o dividir y sus respectivas cifras...no olvide usar comillas en las operaciones...gracias.";            
    }
    
    return resultado;
}
    
console.log(operaciones_basicas("sumar", 5, 10, 15, 20, 25, 30));   