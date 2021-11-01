//As funções no JavaScript podem receber quantidades variáveis de parâmetros. Por exemplo, a função "soma()" abaixo não tem nenhum parâmetro definido em sua assinatura, mas, ao ser chamada, parâmetros podem ser passados da mesma forma:
function soma() {
    let soma = 0;
    for (i in arguments) {
        //"arguments" é um array interno do JavaScript que contém, por padrão, todos os parâmetros que foram recebidos por uma função.
        soma += arguments[i];
    }
    return soma;
}
console.log(soma()); //Retorna "0", pois nenhum parâmetro foi passado.
console.log(soma(1)); //Retorna "1", pois é o valor do único parâmetro que foi passado.
console.log(soma(1.1, 2.2, 3.3)); //Retorna "6.6", pois é a soma de todos os parâmetros passados.
console.log(soma(1.1, 2.2, "c")); //Soma os 2 primeiros parâmetros, que são numéricos, e concatena com o terceiro, que é uma string.
console.log(soma("a", "b", "c")); //Concatena o valor inicial da variável "soma" com todos os parâmetros, pois apenas strings foram passadas.
console.log(soma("a", 10, "c")); //Todos os valores serão concatenados, pois o valor inicial da variável "soma" primeiro recebe a string "a", convertendo a variável numérica "soma" em string.
console.log(soma("a", 10, 20)); //Todos os valores serão concatenados, pois o valor inicial da variável "soma" primeiro recebe a string "a", convertendo a variável numérica "soma" em string.
