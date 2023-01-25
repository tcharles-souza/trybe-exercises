// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let produtoFatorial = 1;
let fatorial = 10;

for (let i = fatorial; i > 0; i--){
    produtoFatorial = produtoFatorial*i
}

console.log(produtoFatorial)

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo,
// a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para 
// verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let invertedWord = '';

for(i = word.length-1; i >= 0; i--){
    invertedWord = invertedWord + word[i]
}

console.log(invertedWord)

//Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse 
// array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let wordSize = 0;
let maiorPalavra = '';
let menorPalavra = '';

// Encontra a maior palavra e salva o tamanho da palavra

for (let i = 0; i < array.length; i++){
    if (array[i].length > wordSize){
        wordSize = array[i].length
        maiorPalavra = array[i];
    }
};

// A variável wordSize está gravada com o tamanho da maior palavra, logo agora é só encontrar quais palavras tem são menores:

for (let i = 0; i < array.length; i++){
    if (array[i].length < wordSize){
        wordSize = array[i].length
        menorPalavra = array[i];
    };
};

console.log('Maior palavra: ', maiorPalavra)
console.log('Menor palavra: ', menorPalavra)

 
//  Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele 
//  mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50

let primo = false;

for (let i = 3; i < 50; i++){
    for (let j = 2; j < i; j++){
        if(i%j == 0){
        primo = false;
    } else {
    }
}
}