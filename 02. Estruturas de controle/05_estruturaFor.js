let contador = 1;
while (contador <= 10) {
    console.log(`contador = ${contador}`);
    contador++; //Incrementa a variável "contador", ocasionando o valor "false" na expressão do "while" em um determinado momento, encerrando a repetição do bloco.
}

//No caso da estrutura "for", é obrigatório passar parâmetros que controlem o número de repetições que serão realizadas.
for (let i = 1; i < 10; i++) {
    console.log(`i = ${i}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Também é possível percorrer arrays e objetos com a estrutura "for-in":
const notas2 = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i in notas2) {
    console.log(`notas2 = ${notas2[i]}`); //Diferentemente de outras linguagens de programação, ainda é necessário acessar diretamente no índice do vetor para obter seu valor.
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64,
};

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}
