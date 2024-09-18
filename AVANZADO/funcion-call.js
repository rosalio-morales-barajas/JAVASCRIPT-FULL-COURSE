
const carro = {
    brand: "Ford",
    model: "Mustang",
    year: 2021,
    description: function(){
        return `${this.brand}, ${this.model}, ${this.year}`;
    }
}


const motocicleta = {
    brand: 'Harley-davidson',
    model: 'Tahoe',
    year: 2018
}


console.log(carro.description());
console.log(carro.description.call(motocicleta));
