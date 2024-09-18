//Funciones prestadas
const objeto1 = {
    name: "Objeto 1",
    nombrar(){
        console.log(`Mi nombre es ${this.name}`);
    }
}

const objeto2 = {
    name: 'Objeto 2'
}

objeto1.nombrar();
objeto1.nombrar.call(objeto2);