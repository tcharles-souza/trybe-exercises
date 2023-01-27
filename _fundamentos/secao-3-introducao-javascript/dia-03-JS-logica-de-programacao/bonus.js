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
console.log('Exercício III -------------------------------------------')
console.log()

// Agora inverta o triângulo:

//A idea é adicionar espaços vazios a uma variável até que, dada uma condição, serão adicionados asterísticos.
let trianguloInvertido = '';
let decrescimo = 0;

console.log('Triângulo invertido de base ', n)
console.log()

//      O meu primeiro for zera a linha do espaços e asterísticos e incrementa a variável 'descrescimo' que será utilizada
//no segundo for.

//Explicação do segundo for: Enquanto j for menor que n, adiciona 'espaço vazio', do contrário adiciona '*'.
//o descréscimo serve para que a cada linha seja adicionado um asterístico a mais'


for (let i = 0; i < n; i++) {

    trianguloInvertido = ''
    decrescimo++

    for (let j = 0; j < n; j++) {
        if (j < n - decrescimo) {
            trianguloInvertido = trianguloInvertido + ' ';
        } else {
            trianguloInvertido = trianguloInvertido + '*';
        }
    }
console.log(trianguloInvertido)
}


console.log()
console.log('Exercício IV -------------------------------------------')
console.log()


// Depois, faça uma pirâmide com n asteriscos de base n

//ideia = qual sequencia ira passar?

// 0 1 "2" 3 4   -> seleciona 1 numero            n                             i = 0   middle =  2 
// 0"1 2 3" 4    -> seleciona 3 numeros       -1n n +1n                         i = 1   middle =  123
//"0 1 2 3 4"    -> seleciona 5 numeros   -1n -1n n +1n +1n ou seja, +2 n       i = 2   middle =  12345
//               -> seleciona 7 numeros ...                                     i = 3   middle =  1234567
//                                                                              i = 4   middle =  12345678
//                                                                              i = 5   middle =  123456789

//acrescimo
//descrescimo


if(n%2 == 0){
    n = n +1;
}

console.log('Triângulo de base ',n)

let triangulo = ''
let middleNumber = Math.floor(n / 2)
let acrescimo = middleNumber;
decrescimo = middleNumber;

for (let i = 0; i < n; i += 1) {
    if (i == middleNumber) {
        triangulo = triangulo + '*'
    } else {
        triangulo = triangulo + ' '
    }
}

console.log(triangulo)

for (let i = 0; i < middleNumber; i += 1) {
    
    acrescimo++
    decrescimo--

    triangulo = triangulo.substring(0, acrescimo)
        + '*'
        + triangulo.substring(acrescimo + 1);

    triangulo = triangulo.substring(0, decrescimo)
        + '*'
        + triangulo.substring(decrescimo + 1)

    console.log(triangulo)

}

console.log()
console.log('Exercício V -------------------------------------------')
console.log()
console.log('Triangulo vazio no meio de base ',n)

// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// 0 1 2 '3' 4 5 6 
// 0 1 '2' 3 '4' 5 6
// 0 '1' 2 3 4 '5' 6 
// '0 1 2 3 4 5 6'


let cresceMid = middleNumber;
let diminuiMid = middleNumber;
triangulo = '';

for (let i = 0; i < middleNumber; i += 1) {
    for (let i = 0; i < n; i++) {
        if (i == cresceMid || i == diminuiMid) {
            triangulo = triangulo + '*'
        } else {
            triangulo = triangulo + ' '
        }
    }
    cresceMid++
    diminuiMid--
    console.log(triangulo)
    triangulo = '';
}

for (let i = 0; i < n; i++) {
    triangulo = triangulo + '*';
}
console.log(triangulo)