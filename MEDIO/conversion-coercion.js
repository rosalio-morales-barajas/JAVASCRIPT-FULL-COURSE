//Conversion vs Coercion


//Conversion de String a Numero
let string = "358";
let numero = Number(string);
//console.log(typeof numero);

//Coercion de String a Numero
let numero1 = "500";
let numero2 = 500;
let conversion = numero1 + numero2;
console.log(typeof conversion);
console.log(conversion);
let numero1_convertido = Number(numero1);
console.log(typeof numero1_convertido);
let suma = numero1_convertido + numero2;
console.log(typeof suma);
console.log(suma);