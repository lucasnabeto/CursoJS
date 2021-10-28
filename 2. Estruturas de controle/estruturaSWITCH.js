//O "switch" é uma boa alternativa para situações que teriam muitos "else if".
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log("Quadro de Honra");
            break; //Palavra reservada necessária para sair da estrutura switch após executar um dos casos. Ao remover o "break", todos os casos abaixo do primeiro caso verdadeiro serão executados.
        case 8:
        case 7:
            console.log("Aprovado");
            break;
        case 6:
        case 5:
        case 4:
            console.log("Recuperação");
            break;
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("Reprovado");
        default:
            //Sempre entra nesse cenário caso nenhum dos anteriores tenha sido verdadeiro.
            console.log("Nota inválida");
        //Não é necessário usar o "break" porque este é o último caso do switch.
    }
};

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);
