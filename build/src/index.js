import { data } from './data';
// let INDICE = 13;
// let SOMA = 0;
// let K = 0;
// while (K < INDICE) {
//     K = K + 1;
//     SOMA = SOMA + K;
// }
// console.log(SOMA); //91
// function isFibonacci(num: number): boolean {
//     if (num === 0 || num === 1) return true;
//     let a = 0, 
//     b = 1, 
//     c = a + b;
//     while (c <= num) {
//         if (c === num) return true;
//         a = b;
//         b = c;
//         c = a + b;
//     }
//     return false;
// }
// const numberToCheck = 21; 
// if (isFibonacci(numberToCheck)) {
//     console.log(`${numberToCheck} pertence a sequência de Fibonacci.`);
// } else {
//     console.log(`${numberToCheck} não pertence a sequência de Fibonacci.`);
// }
function calculateMetrics(data) {
    const valores = data.map(entry => entry.valor).filter(valor => valor > 0);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const somaValores = valores.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = somaValores / valores.length;
    const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;
    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}
const metrics = calculateMetrics(data);
console.log(`Menor valor de faturamento: ${metrics.menorValor}`);
console.log(`Maior valor de faturamento: ${metrics.maiorValor}`);
console.log(`Número de dias com faturamento acima da média: ${metrics.diasAcimaDaMedia}`);
