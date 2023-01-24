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

// Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 3000;
let aliquotaINSS;
let salarioBase;
let parcelaIR;
let aliquotaIR;
let salarioLiquido;

if (salarioBruto < 1556.94) {
    aliquotaINSS = 0.08;
    salarioBase = salarioBruto * (1 - aliquotaINSS);
} else if (salarioBruto < 2594.92) {
    aliquotaINSS = 0.09;
    salarioBase = salarioBruto * (1 - aliquotaINSS);
} else if (salarioBruto < 5189.82) {
    aliquotaINSS = 0.11;
    salarioBase = salarioBruto * (1 - aliquotaINSS);
} else {
    aliquotaINSS = 570.88;
    salarioBase = salarioBruto - aliquotaINSS;
}

// Cálculo do Imposto de Renda

if (salarioBase < 1903, 99) {
    salarioLiquido = salarioBase;
} else if (salarioBase < 2826.66) {
    aliquotaIR = 0, 075
    parcelaIR = 142.80
    salarioLiquido = (aliquotaIR * salarioBase) - parcelaIR;
} else if (salarioBase < 3751.06) {
    aliquotaIR = 0, 15
    parcelaIR = 345.80
    salarioLiquido = (aliquotaIR * salarioBase) - parcelaIR;
} else if (salarioBase < 4664.69) {
    aliquotaIR = 0, 225
    parcelaIR = 636.13
    salarioLiquido = (aliquotaIR * salarioBase) - parcelaIR;
} else {
    aliquotaIR = 0, 275
    parcelaIR = 869.36
    salarioLiquido = (aliquotaIR * salarioBase) - parcelaIR;
}


console.log()
console.log(salarioLiquido.toFixed(2))