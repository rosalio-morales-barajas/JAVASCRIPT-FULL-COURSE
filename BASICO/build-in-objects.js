//Los buildInObjects son objetos que estan incorporados en el lenguaje y se proporcionan de forma predeterminada para su uso 
//en cualquier programa de Javascript.

const objeto = new Object();

objeto.nombre = 'Rosalio Morales';
objeto.edad = 23;
objeto.pais = 'Mexico';
objeto.saludo = function(){
    console.log('Hola a todos...me llamo '+this.nombre+', mi edad es: '+this.edad+', y soy de '+this.pais);
}

//console.log(objeto)
//console.log(objeto.saludo());


let array = new Array();
array.push(5, 10, 15, 20, 25, 30, 35, 40, 45, 50);
//console.log(array);

numeros = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

//console.log(numeros)

numeros.push(33, 36, 39);

//console.log(numeros)

polo = [];
//console.log(polo)

polo.push(4, 8, 12, 16, 20, 24, 28, 32, 36, 40);

//console.log(polo)

//console.log(polo.length);

let str = new String("pelos");
//console.log(str);
//console.log(str.length);
//console.log(str.toUpperCase())

//console.log(Math.random())
//console.log(Math.floor(58.789))
//console.log(Math.sqrt(64))


var fecha = new Date();
/*console.log(fecha.getDate())
console.log(fecha.getDay())
console.log(fecha.getMonth())
console.log(fecha.getFullYear(), fecha.getMonth(), fecha.getDay())
console.log(fecha.getUTCDate())
console.log(fecha.getTime())
console.log(fecha.getTimezoneOffset())
console.log(fecha.getHours())             */


