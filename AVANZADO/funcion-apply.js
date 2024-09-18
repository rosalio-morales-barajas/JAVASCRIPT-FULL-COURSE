
function saludar(nombre, edad){
    console.log(`Hola me llamo ${nombre} y tengo ${edad} anos`);
}

const persona = {
    nombre: "Rosalio Morales",
    edad: 49
}


//saludar.apply(persona,['Regino Morales', 35]);
saludar.apply(persona,["Pedro Vazquez", 45]);