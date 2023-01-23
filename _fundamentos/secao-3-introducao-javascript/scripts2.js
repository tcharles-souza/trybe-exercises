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

if (subtracao > 0) {
    console.log('positivo');
} else if (subtracao < 0) {
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

if (angleSum === 180) {
    console.log(true, 'É um triângulo!')
} else if (angleSum > 180) {
    console.log(false, 'Não é um triângulo')
} else {
    console.log('Erro, não é um polígono')
};

// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pecaXadrez = 'peão';
let modifiedName = pecaXadrez.toUpperCase();



    modifiedName = modifiedName.replace(/[ÀÁÂÃÄÅ]/,"A");
    modifiedName = modifiedName.replace(/[àáâãäå]/,"A");
    modifiedName = modifiedName.replace(/[ÈÉÊË]/,"E");


switch (modifiedName) {
    case 'BISPO':
        console.log('Diagonal')
    break
    
    case 'REI':
        console.log('Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.')
    break

    case 'DAMA':
        console.log('Assim como o Rei, pode mover-se em qualquer direção -vertical, horizontal e diagonal-, porém quantas casas quiser, desde que estejam livres.')
    break

    case 'TORRE':
        console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.')
    break

    case 'CAVALO':
        console.log('É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.')
    break 

    case 'PEAO':
        console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.')
    break    

    default:
        console.log('Peça inválida')
};

// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

let porcentagemNota = 1000;

if (porcentagemNota < 0 || porcentagemNota > 100){
    console.log('NOTA INVÁLIDA');
} else if (porcentagemNota >= 90){
    console.log("NOTA A");
} else if (porcentagemNota >= 80){
    console.log('NOTA B');
} else if (porcentagemNota >= 70){
    console.log('NOTA C')
} else if (porcentagemNota >= 60){
    console.log('NOTA D');
} else if (porcentagemNota >= 50){
    console.log('NOTA E')
} else {
    console.log('NOTA F')
};