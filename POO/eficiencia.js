
//Codigo poco eficiente
let  arreglo = [5, 10, 20, 25, 30];
/*function sumar(arreglo){
    let resultado = 0;

    for(let i = 0; i < arreglo.length;i++){
        resultado += arreglo[i];
    }

    return resultado;
}
 //console.log(sumar());  */

 //Codigo Mejorado y util
 function sumar(arreglo){
    let resultado = 0;
    let tam = arreglo.length;

    for(let i = 0; i < tam;i++){
        resultado += arreglo[i];
    }

    return resultado;
}
 //console.log(sumar());


 //Codigo mucho mejor...es mas rapido y eficiente con la funcion reduce().
 let suma = arreglo.reduce(function(acumulador, elemento){
    let acum = acumulador;
    let ele = elemento;
    console.log("El acumulador tiene guardado: "+acum);
    console.log("El elemento ingresa al acumulador: "+ele);
    return acumulador + elemento;
 }, 0);

 console.log(suma);