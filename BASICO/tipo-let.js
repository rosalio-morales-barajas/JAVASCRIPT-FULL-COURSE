
let x = 100;
x = 500;
//console.log(x);

function ejemplo_let(){
    let x = 300;
    if(true){
        let x = 900;
        console.log(x);
    }
    console.log(x);
}
ejemplo_let();