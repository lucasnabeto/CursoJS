function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;
//O "while" é uma estrutura de repetição baseada em verdadeiro ou falso, sendo que o bloco será executado repetidas vezes enquanto a expressão no parâmetro do "while" for verdadeira. Ao término de cada execução, essa expressão é validada novamente antes de iniciar uma nova repetição. Se a variável "opcao" fosse declarada na linha anterior com o valor -1, os comandos contidos dentro do bloco "while" abaixo não seriam executados nenhuma vez sequer.
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10); //Como a estrutura "while" utiliza apenas uma expressão sendo passada por parâmetro, é necessário que algum comando impeça que o bloco fique sendo executado infinitamente.
    console.log(`Opção escolhida foi ${opcao}.`);
}

console.log("Fim da execução.");
