//Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das 
//três for par. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

const number1 = 10;
const number2 = 50;
const number3 = 34;
let isEven = false;

if (number1 % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0) {
    isEven = true;
}
console.log(isEven);
console.log();
//Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das 
//três for ímpar. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

let isOdd = false;

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
    isOdd = true;
}
console.log(isOdd);

//      Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de 
// um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do 
// produto) a empresa terá ao vender mil desses produtos.

const purchaseValue = 150.00;

// Custo total = valor de compra + 20% de imposto

const totalCost= purchaseValue * 1.2;
const saleValue = 300.00; 
let profit;

if (purchaseValue < 0 || saleValue < 0){
    console.log('Erros, valores incorretos.');
} else {
    profit = 1000 * (saleValue - totalCost);
}
console.log()
console.log(`Lucro total R$ ${profit.toFixed(2)}`)