"use strict";
// let INDICE = 13;
// let SOMA = 0;
// let K = 0;
// while (K < INDICE) {
//     K = K + 1;
//     SOMA = SOMA + K;
// }
// console.log(SOMA); //91
function isFibonacci(num) {
    if (num === 0 || num === 1)
        return true;
    let a = 0, b = 1, c = a + b;
    while (c <= num) {
        if (c === num)
            return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}
const numberToCheck = 21;
if (isFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertence a sequência de Fibonacci.`);
}
else {
    console.log(`${numberToCheck} não pertence a sequência de Fibonacci.`);
}
