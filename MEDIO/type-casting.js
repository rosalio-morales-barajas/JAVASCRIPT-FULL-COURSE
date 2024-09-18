//Typecasting --> Coercion de tipo

//De cadenas a  numeros implicitamente
let numero = '60';
let numero2 = 10;
let resultado = numero + numero2;
//console.log(resultado);
//console.log(typeof numero)

//Conversion implicita de numeros a cadenas
let num = 30;
let cadena = "El numero es: "+num;//"30"
//console.log(cadena);

//Conversion explicita de cadenas a numeros
let texto = "500";
let cambiado = Number(texto);
//console.log(typeof texto);
//console.log(typeof cambiado);

//Conversion explicita de numeros a cadenas
let cifra = 500;
//console.log(typeof cifra);
let cadena1 = String(cifra);
//console.log(typeof cadena1);

//Conversion explicita de tipos de datos
let boolean = false;
console.log(typeof boolean);
let convertido = Number(boolean);
console.log(convertido);
