//break y continue son para alterar el funcionamiento de los bucles
for(let i = 1;i <= 10;i++){
    if(i == 6){
        break;
    }
    console.log(i);
}

console.log("-----------------");

for(let i = 1;i <= 10;i++){
    if(i % 2 == 0){
        continue;
    }
    console.log(i);
}

