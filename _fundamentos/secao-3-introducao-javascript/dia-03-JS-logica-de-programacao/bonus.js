// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de
// lado de tamanho n. Por exemplo:

console.log()
console.log('Exercício I -------------------------------------------')
console.log()

// Escolhe um número aleatŕio de 1 a 20 e guarda na variável n


let n = (Math.floor(Math.random() * 19) + 2)
let quadrado = '';

//Cria um váriavel 'quadrado' que irá conter a quantidade de 'n' asterísticos


for (let i = 0; i < n; i++) {
    quadrado = quadrado + '*'
}

console.log('Quadrado de lado', n)
console.log()

// O contador irá contar de 0 até n-1 e irá imprimir na tela a variável quadrada n vezes:

let count = 0;

while (count < n) {
    count++
    console.log(quadrado)
}

console.log()
console.log('Exercício II -------------------------------------------')
console.log()

// Faça o mesmo que antes, mas que imprima um triângulo retângulo com n asteriscos de base

let trianguloRetangulo = '';

console.log('Triângulo de base ', n)
console.log()

for (let i = 0; i < n; i++){
    trianguloRetangulo = trianguloRetangulo + '*';
    console.log(trianguloRetangulo);
}

console.log()
console.log('Exercício II -------------------------------------------')
console.log()