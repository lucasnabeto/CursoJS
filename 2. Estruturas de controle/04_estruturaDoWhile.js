//Diferentemente da estrutura "while", o "do-while" garante que o bloco de comandos será executado no mínimo uma vez.
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao; //Considerando o bloco abaixo, nem sequer é necessário atribuir um valor inicial para a variável "opcao" no momento da declaração.
do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1);

console.log("Fim da execução.");