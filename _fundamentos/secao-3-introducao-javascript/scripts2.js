// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas 
// constantes com os valores que serão comparados.

const a = 1;
const b = 2;
let maior;

if (a > b) {
    console.log('Maior número : a');
} else if (a < b) {
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
} else if (z > x && z > y) {
    maiorDosTres = z
}

console.log("Mior dos três: ", maiorDosTres);

// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor 
// for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

let number1 = 2;
let number2 = 2;
let subtracao = number2 - number1;

if (subtracao > 0 ) {
    console.log('positivo');
} else if (subtracao < 0){
    console.log('negativo');
} else {
    console.log('zero');
}

// Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, 
// você deve retornar uma mensagem de erro.

let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

let angleSum = angle1 + angle2 + angle3;

if (angleSum === 180){
    console.log(true, 'É um triângulo!')
} else if (angleSum > 180) {
    console.log(false, 'Não é um triângulo')
} else {
    console.log('Erro, não é um polígono')
}