
const calculadora = {
    numero1:0,
    numero2:0,
    resultado:0,

    setNumero1(numero1){
        this.numero1 = parseFloat(numero1);
    },

    setNumero2(numero2){
        this.numero2 = parseFloat(numero2);
    },

    getNumero1(){
        return this.numero1;
    },

    getNumero2(){
        return this.numero2;
    },

    sumar(){
        return this.resultado = this.numero1 + this.numero2;
    },

    restar(){
        return this.resultado = this.numero1 - this.numero2;
    },

    multiplicar(){
        return this.resultado = this.numero1 * this.numero2;
    },

    dividir(){
        if(this.numero1 == 0 || this.numero2 == 0){
            console.log("Los numeros deben ser mayores a cero...verifique sus numeros...");
            alert("Los numeros deben ser mayores a cero...verifique sus numeros...");
        }else{
            return this.resultado = this.numero1 / this.numero2;
        }
    },

    mostrarResultado(){
        document.getElementById('resultado').innerText = 'El resultado de la operacion es: '+this.resultado;
    }
}

function calcular(){
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    const operacion = document.getElementById('operacion').value;

    calculadora.setNumero1(numero1);
    calculadora.setNumero2(numero2);

    switch(operacion){
        case 'sumar':
            calculadora.sumar();
            calculadora.mostrarResultado();
            break;
        case 'restar':
            calculadora.restar();
            calculadora.mostrarResultado();
            break;
        case 'multiplicar':
            calculadora.multiplicar();
            calculadora.mostrarResultado();
            break;
        case 'dividir':
            calculadora.dividir();
            calculadora.mostrarResultado();
            break;
        default:
            alert('Operacion Invalida...');                
    }


}





/* calculadora.setNumero1(0);
calculadora.setNumero2(50);

console.log(calculadora.getNumero1());
console.log(calculadora.getNumero2());

console.log(calculadora.sumar())
//console.log(calculadora.restar())
//console.log(calculadora.multiplicar())
console.log(calculadora.dividir())   
console.log(calculadora.mostrarResultado())   
 */



