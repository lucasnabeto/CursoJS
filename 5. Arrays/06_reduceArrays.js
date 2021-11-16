//A função "reduce" serve para iterar sobre um array e utilizar o valor de cada item para criar um objeto final com base em alguma regra. Como o próprio nome da função sugere, ela reduz os itens de um array a um valor único. O propósito dessa função é agregar valores.
const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true },
];

console.log(alunos.map((a) => a.nota));
const resultado = alunos
    .map((a) => a.nota)
    .reduce(function (totalAcumulado, iteracaoAtual) {
        console.log(
            `total acumulado: ${totalAcumulado} --- iteração atual: ${iteracaoAtual}`
        );
        return totalAcumulado + iteracaoAtual;
    }, 10); //É possível passar um valor inicial por parâmetro.
console.log(`\nresultado: ${resultado}`);
console.log(`tipo do resultado: ${typeof resultado}`);

//Verificando se todos os alunos são bolsistas:
const todosBolsistas = alunos
    .map((a) => a.bolsista)
    .reduce(
        (resultadoAcumulado, iteracaoAtual) =>
            resultadoAcumulado == true && iteracaoAtual == true
    );
console.log(todosBolsistas);

//Verificando se algum dos alunos é bolsista:
const algumBolsista = alunos
    .map((a) => a.bolsista)
    .reduce(
        (resultadoAcumulado, iteracaoAtual) =>
            resultadoAcumulado == true || iteracaoAtual == true
    );
console.log(algumBolsista);

//Simulando a criação da função "reduce":
Array.prototype.reduce2 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1;
    let acumulador = valorInicial || this[0];
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }
    return acumulador;
};

console.log("\nSimulação da função 'reduce':");
const nums = [1, 2, 3];
const soma = (total, valor) => total + valor;
console.log(nums.reduce2(soma, 1));
