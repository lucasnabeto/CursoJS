const alunos = [
    { nome: "João", nota: 7.9 },
    { nome: "Maria", nota: 9.2 },
];

//Imperativo - Dizer exatamente os passos que serão executados:
let totalImperativo = 0;
for (let i = 0; i < alunos.length; i++) {
    totalImperativo += alunos[i].nota;
}
console.log(`imperativo: ${totalImperativo / alunos.length}`);

//Declarativo - Dizer o objetivo que deve ser alcançado sem explicar exatamente os passos necessários:
const getNota = (aluno) => aluno.nota;
const soma = (total, atual) => total + atual;
let totalDeclarativo = alunos.map(getNota).reduce(soma);
console.log(`declarativo: ${totalDeclarativo / alunos.length}`);
