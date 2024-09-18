
var persona = {

    nombre: "Rosalio Morales Barajas",
    edad: 48,
    cel: 5525458,
    saludo: function(){
        console.log('Hola a todos...mi nombre es: '+this.nombre+", mi edad es: "+this.edad+', y mi cel es: '+this.cel);
    },
    cambiar_nombre: function(nuevo_nombre){
        this.nombre = nuevo_nombre;
    }
}

console.log(persona)

console.log(persona.saludo())

console.log(persona.cambiar_nombre('Regino Morales Barajas'))

console.log(persona)