// ---->** sem querer fiz uma seta! Ficou massa!


// Depois, faça uma pirâmide com n asteriscos de base n

//ideia = qual sequencia ira passar?

// 0 1 "2" 3 4   -> seleciona 1 numero            n                             i = 0   middle =  2 
// 0"1 2 3" 4    -> seleciona 3 numeros       -1n n +1n                         i = 1   middle =  123
//"0 1 2 3 4"    -> seleciona 5 numeros   -1n -1n n +1n +1n ou seja, +2 n       i = 2   middle =  1234
//               -> seleciona 7 numeros ...

n = 7;
let triangulo = ''
let middleNumber = Math.floor(n/2)
let test = -1;

for (let j = 0; j < n; j += 1){
    test++
    triangulo = ''

    for (let i = 0; i < n; i += 1) {
        if (i == middleNumber || i == (middleNumber - test) || i == (middleNumber + test)) {
            triangulo = triangulo + '*'
        } else {
            triangulo = triangulo + ' '
        }
    }
    console.log(triangulo)
}