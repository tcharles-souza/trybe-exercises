let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let numb of numbers){
    console.log(numb);
}

//Some todos os valores contidos no array e imprima o resultado;

let sum = 0;

for (numb of numbers){
    sum = sum + numb
}
console.log()
console.log('Exercício 2 ----------------------')
console.log()
console.log(`SOMA = ${sum}`)

// Calcule e imprima a média aritmética dos valores contidos no array;

let media = sum/numbers.length;

console.log()
console.log('Exercício 3 ----------------------')
console.log()
console.log(`MEDIA = ${media}`)

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem:
// “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

console.log()
console.log('Exercício 4 ----------------------')
console.log()

if (media > 20){
    console.log('Valor maior que 20')
} else {
    console.log('Valor menor ou igual a 20');
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorNumero = numbers[0];

for (i = 0; i < numbers.length; i +=1){
    if (numbers[i] > maiorNumero){
        maiorNumero = numbers[i];
    }
};

console.log()
console.log('Exercício 5 ----------------------')
console.log()

console.log(`Maior número = ${maiorNumero}`)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem:
// “nenhum valor ímpar encontrado”;

let impares = 0;

for(let i = 0; i < numbers.length; i++){
    if((numbers[i]%2) != 0){
        impares++
    }
}
console.log()
console.log('Exercício 6 ----------------------')
console.log()

if (impares > 0) {
    console.log(`Quantidade de impares = ${impares}`)
} else {
    console.log('Nenhum valor ímpar encontrado.')
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < menorNumero){
        menorNumero = numbers[i]
    }
}

console.log()
console.log('Exercício 7 ----------------------')
console.log()

console.log('Menor número:', menorNumero);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = [];

for(i = 1; i <= 25; i++){
    numbers.push(i);
}

console.log()
console.log('Exercício 8 ----------------------')
console.log()

console.log(numbers)

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let array2 = [];

for (let i = 0; i < numbers.length; i++){
    array2[i] = numbers[i]/2
}

console.log()
console.log('Exercício 8 ----------------------')
console.log()

console.log(array2)