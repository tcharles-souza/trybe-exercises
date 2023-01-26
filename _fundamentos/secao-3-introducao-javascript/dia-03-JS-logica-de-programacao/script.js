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


// Crio duas variáveis, uma vai guardar o intervalo de números, a outra irei separar os números primos.

let numbers = [];
let primos = [];

//Cria o intervalo de números:

for (let i = 2; i <= 50; i++){
    numbers.push(i);
}

//Aqui faço a separação: se não é primo, então é false. Para isso:
// 1 - faço uma varredura no meu intervalo de número e analiso cada um
// 2 - Análise: pego um número "numbers[i]" e divido esse número por 2 até "numbers[i]-1"
// por exemplo: o número 7 é divido por (2, 3, 4, 5, 6). Como nenhuma dessas divisões deixa resto 0, o valor de "numbers[i]"
// não é alterado para false.
// 3- Agora todos os números do meu array que não são primos foram atribuidos como false.

for (let i = 0; i < numbers.length; i++){
    for (j = 2; j < numbers[i] ; j++){
        if (numbers[i]%j === 0){
            numbers[i] = false;
        }
    }
}
// Para fins de visualização, retiro todos os "false" do meu array e crio uma variável contendo somente os números primos:

for (let value of numbers){
    if (value !== false){
        primos.push(value)
    }
}

console.log('números primos:', primos)

//  Crio um váriavel de valor 0; faço uma varredura para saber qual "maiorPrimo[i]" é maior que a variável e atribuo a esta
//o valor, caso ele seja maior:

let maiorPrimo = 0;

for(let value of primos){
    if (value > maiorPrimo){
        maiorPrimo = value;
    }
}
console.log(primos)
console.log(`Maior primo encontrado no intervalo = ${maiorPrimo}`)