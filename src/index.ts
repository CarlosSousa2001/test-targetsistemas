interface Data {
    dia: number;
    valor: number;
}


let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA); //91

function isFibonacci(num: number): boolean {
    if (num === 0 || num === 1) return true;
    let a = 0, 
    b = 1, 
    c = a + b;
    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

const numberToCheck = 21; 
if (isFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertence a sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence a sequência de Fibonacci.`);
}

 const data:Data[] = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

function calculateMetrics(data: Data[]) {
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

const faturamentoPorEstado = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 }
];

const totalFaturamento = faturamentoPorEstado.reduce((acc, { valor }) => acc + valor, 0);

const percentualPorEstado = faturamentoPorEstado.map(({ estado, valor }) => {
    const percentual = (valor / totalFaturamento) * 100;
    return { estado, percentual: percentual.toFixed(2) };
});

percentualPorEstado.forEach(({ estado, percentual }) => {
    console.log(`${estado}: ${percentual}%`);
});

function inverterString(str: string): string {
    return str.split('').reduce((invertida, char) => char + invertida, '');
}

const stringOriginal = "Desafio contra o tempo";
const stringInvertida = inverterString(stringOriginal);
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
