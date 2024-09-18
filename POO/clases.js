class Persona{
    nombre;
    constructor(nombre){
        this.nombre = nombre;
    }

    saludar(){
        console.log("Hola "+this.nombre);
    }
}


let persona1 = new Persona('Rosalio');
//persona1.saludar();
let persona2 = new Persona("Jose Luis peraza");
//persona2.saludar();


class Rectangulo{
    base = 0;
    altura = 0;
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.base * this.altura;
    }

    sumar(a, b){
        return a + b;
    }
}

let rectangulo1 = new Rectangulo(15, 8);
//console.log(rectangulo1.calcularArea());
let rectangulo2 = new Rectangulo();
//console.log(rectangulo2.sumar(80, 200));

class Plantilla{
    id;
    nombre;
    departamento;
    constructor(id, nombre, departamento){
        this.id = id;
        this.nombre = nombre;
        this.departamento = departamento;
    }

    mostrarDatos(){
        console.log("id_empleado: "+this.id+"\nnombre_empleado: "+this.nombre+"\ndepartamento: "+this.departamento);
    }
}

let empleado1 = new Plantilla(1524, "Rosalio Morales Barajas", "Ingenieria");
//mpleado1.mostrarDatos();
let empleado2 = new Plantilla(3589, "Rafael Quintana Lopez", "Intendencia");
//empleado2.mostrarDatos();