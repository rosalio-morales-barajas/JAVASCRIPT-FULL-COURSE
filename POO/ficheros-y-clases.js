class Persona{
    nombre;
    edad;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }


    /*getDatos(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }  */

    saludar(){
        console.log("Hola, me llamo "+this.nombre+" y mi edad es: "+this.edad);
    }
}

class Operaciones{
    sumar(a, b){
        let resultado = a + b;
        console.log("La suma de "+a+" + "+b+" es: "+resultado)
    }
}

module.exports = Persona, Operaciones;

    

