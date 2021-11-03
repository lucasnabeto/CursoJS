//No Ecma Script 6 (2015), foram introduzidas as funções arrow. Os principais objetivos para a introdução dessas funções são a possibilidade de escrever funções de forma reduzida e sempre ter um "this" associado ao contexto no qual foi escrita. As funções arrow são sempre anônimas, portanto, é necessário que sejam armazenadas em constantes ou variáveis caso haja intenção de chamá-la.

//Forma padrão de se escrever uma função:
let dobro = function (a) {
    return 2 * a;
};

//Função arrow usando "return" explícito:
dobro = (a) => {
    return 2 * a;
};

//Função arrow usando "return" implícito:
dobro = (a) => 2 * a; //Nesse caso, é obrigatório que a função contenha apenas 1 única sentença de código. Já o uso dos parênteses ao redor dos parâmetros é opcional quando há apenas 1 parâmetro.

//Existem 2 formas de indicar que uma função arrow não possui parâmetros:
ola = () => "Olá!";
ola = (_) => "Olá!"; //Na verdade, há um parâmetro, mas ele é considerado opcional.
