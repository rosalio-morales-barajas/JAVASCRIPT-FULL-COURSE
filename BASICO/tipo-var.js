//Palabra reservada var
var x = 100;
console.log(x);
x = 300;
console.log(x);

//Alcance de la variable var
function ejemplo(){
    var y = 10;
    if(true){
        var y = 50;
        console.log(y);
    }
}

ejemplo();
