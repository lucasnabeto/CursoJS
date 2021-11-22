//O "flat map" é uma técnica que usa as funções "map" e "concat" para concatenar elementos de uma matriz em um único array. O "flat map" não é uma função nativa do JavaScript.
const escola = [
    {
        nome: "Turma 1",
        alunos: [
            { nome: "João", nota: 8.1 },
            { nome: "Ana", nota: 9.3 },
        ],
    },
    {
        nome: "Turma 2",
        alunos: [
            { nome: "Rebeca", nota: 8.9 },
            { nome: "Roberto", nota: 7.3 },
        ],
    },
];

console.log("resultado desejado: ", [].concat([8.1, 9.3], [8.9, 7.3])); //Resultado esperado pelo "flat map".

//Função "map":
const getNotaDoAluno = (a) => a.nota;
const getNotasDaTurma = (t) => t.alunos.map(getNotaDoAluno);
console.log("map: ", escola.map(getNotasDaTurma)); //Retorna um array contendo 2 arrays.

//Implementando o "flat map"
Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback));
};
console.log("flat map: ", escola.flatMap(getNotasDaTurma));
