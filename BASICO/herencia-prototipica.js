
let animal = {//Prototipo(Clase)
    tipo: "desconocido",
    sonido: function(){
        console.log('El animal hace un sonido');
    }
}

//let perro = new animal();
let perro = Object.create(animal);//Se crea una instancia del prototipo(clase) animal

perro.tipo = 'Perro';//Se cambia el valor del parametro tipo
perro.sonido = 'El perro ladra';//Se cambia el valor del parametro sonido

console.log(perro);//Se muestar la instancia creada con sus valores agregados

let gato = Object.create(animal);

gato.tipo = 'Gato';
gato.sonido = 'El gato maulla';

console.log(gato);
