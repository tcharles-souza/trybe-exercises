// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas 
// constantes com os valores que serão comparados.

const a  = 1;
const b = 2;
let maior;

if (a > b){
    console.log('Maior número : a');   
} else if (a < b){
    console.log('Maior número : b');
} else {
    console.log('Os dois números são iguas');
}


// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três 
// constantes com os valores que serão comparados.

let x = 5;
let y = 4;
let z = 3;
let maiorDosTres = x;

if (y > x && y > z) {
    maiorDosTres = y;
} else if (z > x && z > y ) {
    maiorDosTres = z
}

console.log("Mior dos três: ", maiorDosTres)



