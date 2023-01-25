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

