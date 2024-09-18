let array = [];
let array2 = [100, 200, 300, 400, 500];

//console.log(array2);
array2[0] = 10;
//console.log(array2);
array2[4] = 500;
array2.push(600);
//console.log(array2);

//Eliminar el ultimo elemento de un array
array2.pop();
//console.log(array2);

//Eliminar varios elementos a partir de un indice
array2.splice(3, 2);
//console.log(array2);

//Buscar un elemento en un array
//console.log(array2.indexOf(3000));

//Obtener la longitud de un array
//console.log(array2.length);

//Agregar un elemento al principio de un array
array2.unshift(3000);
//console.log(array2);

//Eliminar un elemento al principio de un array
array2.shift();
//console.log(array2); 

//console.log(array2);
array2[0] = 100;
array2.push(400);
array2.push(500);
array2.push(600);
array2.push(700);
array2.push(800);
array2.push(900);
array2.push(1000);
//console.log(array2);

array2.forEach(function(elemento){
    //console.log(elemento);
});

let alumnos = [['Rosalio Morales Barajas', 48, 'Calle pirineos # 68 Las aguilas'], 
               ['Pedro Rivas Palacios', 56, 'Calle de las golondrinas # 600 Centro'],
               ['Raul Pinal Alvarez', 32, 'Calle de los abedules # 52 Centro'],
               ['Noroberto medallas pelas', 25, 'Calle de los olivos # 58 Centro']];
  
console.log(alumnos);               

alumnos.forEach(function(elemento){
    console.log(elemento);
});               