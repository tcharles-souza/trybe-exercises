//Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das 
//três for par. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

const number1 = 7;
const number2 = 3;
const number3 = 9;
let isEven = false;

if (number1 % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0) {
    isEven = true;
}
console.log(isEven);