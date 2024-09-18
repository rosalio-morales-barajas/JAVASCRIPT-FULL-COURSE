//Keyed Collection MAP(una coleccion clave-valor) 

//Crear un mapa --> creamos una instancia de Map()
let mapa = new Map();

//agregar elementos a la instancia map
mapa.set("Rosalio Morales", 48);
mapa.set("clave1", "valor1");
mapa.set("clave2", "valor2");
mapa.set("clave3", "valor3");

//Mostrar valores de la instancia Map
/* console.log(mapa.get("Rosalio Morales"));
console.log(mapa.get("clave1"));
console.log(mapa.get("clave2"));
console.log(mapa.get("clave3"));
console.log(mapa);      */


//Borrar elementos de la instancia Map
/* console.log(mapa.get("clave1"));
console.log(mapa.get("clave2"));
console.log(mapa.get("clave3"));
mapa.delete("clave1");
console.log(mapa.get("clave1"));
mapa.delete("clave2");
console.log(mapa.get("clave2"));
mapa.delete("clave3");
console.log(mapa.get("clave3"));
console.log(mapa);          */

//Mostrar el tamano del mapa
/* console.log(mapa.size);


//Revisar si una dato existe dentro del mapa
console.log(mapa.has("clave5"));

mapa.forEach(function(elemento){
    console.log(elemento);
});

const iterador = mapa.entries();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

function claveValor(key, value) {
    console.log(" Clave",       "Valor");
    console.log("-------",      "------");
    console.log(`${value} = ${key}`);
}

mapa.forEach(claveValor);

mapa.forEach(function(elemento){
    console.log(elemento);
});

mapa.clear();
console.log(mapa.clear());
console.log(mapa.size);
console.log(mapa);      */


let usuarios = new Map();

usuarios.set(1, {nombre: "Rosalio Morales Barajas", edad: 49, domicilio: "Calle de las golondrinas # 356 Centro"});
usuarios.set(2, {nombre: "Marco Antonio perales", edad: 23, domicilio: "Calle de las estrellas # 89 Centro"});
usuarios.set(3, {nombre: "Maria Fernanda landeros", edad: 28, domicilio: "Miraflores # 78 Centro"});

/* console.log(usuarios.get(1));
console.log(usuarios.get(2));
console.log(usuarios.get(3));   */

/* usuarios.delete(1);
console.log(usuarios.get(1));
usuarios.delete(2);
console.log(usuarios.get(2));
usuarios.delete(3);
console.log(usuarios.get(3));  */

function mostrar(key, value){
    console.log(`${value} = ${key}`);
}

usuarios.forEach(mostrar);

usuarios.forEach(function(elemento){
    console.log(elemento);
});

console.log(usuarios);
console.log(usuarios.size);

usuarios.delete(3);
console.log(usuarios);
usuarios.clear();
console.log(usuarios);

