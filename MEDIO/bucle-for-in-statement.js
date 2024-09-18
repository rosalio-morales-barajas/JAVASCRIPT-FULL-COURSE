//for...in ---> es un bucle que se usa para recorrer las propiedades de un objeto
/* for(variable in objeto){
    console.log(variable)
}  */

const persona = {
    nombre: "Rosalio Morales",
    edad: 49,
    profesion: "Desarrollador"
}

for(let dato in persona){
    //console.log(dato + ": "+persona[dato]);
}

let carro = {
    nombre: "Vocho",
    modelo: 1975,
    color: "rojo"
}

for(let aux in carro){
    console.log(aux + ": "+carro[aux]);
}

let numeros = {
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    seis: "seis"
}

let suma = 0;

for(let numero in numeros){
    if(typeof numeros[numero] == 'number'){       
        suma += numeros[numero];
    } 
}

console.log(suma);