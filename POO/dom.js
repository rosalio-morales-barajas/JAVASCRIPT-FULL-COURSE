
let titulo = document.getElementById('titulo');

//titulo.innerHTML = "Hola pelos";
let cancion = "\nCon los brazos de la fiebre\nque aun abarcan mi frente\nlo he pensado mejor, y desatare\nlas serpientes de la vanidad.";

let area = document.getElementById('area-cancion');

let boton = document.getElementById('boton');
let boton_limpiar = document.getElementById('limpiar-texto');

boton.addEventListener('click', function(){
    //alert('Estoy probando el funcionamiento del boton...');
    //titulo.innerHTML = "Hola pelos";
    area.innerHTML = cancion;
});

boton_limpiar.addEventListener('click', function(){
    area.innerHTML = "";
});