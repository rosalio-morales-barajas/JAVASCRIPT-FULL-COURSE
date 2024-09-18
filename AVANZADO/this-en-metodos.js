const persona = {
    nombre: "Rosalio Morales",
    edad: 49,
    saludar: function(){
        console.log('Me llamo '+this.nombre+" y tengo "+this.edad);
    }
}

persona.saludar();