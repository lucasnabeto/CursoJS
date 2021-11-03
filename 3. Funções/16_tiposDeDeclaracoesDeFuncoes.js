//Existem 3 tipos de declaração de funções:

console.log(soma(2, 3)); //Funções declaradas da forma padrão ("function declaration") podem ser chamadas de qualquer ponto do código, inclusive em pontos anteriores ao qual foi declarada.
//Function declaration:
function soma(x, y) {
    return x + y;
}

//Function expression:
let subtracao = function (x, y) {
    return x - y;
};
console.log(subtracao(2, 3)); //Funções declaradas da forma "function expression" só podem ser chamadas a partir de pontos posteriores ao ponto no qual foi declarada.

//Named function expression:
const multiplicacao = function multiplicacao(x, y) {
    return x * y;
};
console.log(subtracao(2, 3)); //Funções declaradas da forma "named function expression" só podem ser chamadas a partir de pontos posteriores ao ponto no qual foi declarada.

//A diferença entre pontos em que essas funções podem ser chamadas se dá ao fato de que o interpretador sempre carrega primeiro todas as funções para só depois carregar variáveis e constantes.
