//Existem 5 formas possíveis de se associar um valor padrão para cada parâmetro recebido por uma função. Definir um valor padrão para um parâmetro é muito útil para quando o valor recebido na chamada da função não está de acordo com o que era esperado por essa função.
//Forma 1 - Utilizando o operador lógico "OU":
function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));
console.log(soma1(0, 0, 0)); //Retorna o valor "3", mesmo esse não sendo o resultado esperado, pois o "0" enviado por parâmetro é considerado como "false".

//Formas 2, 3 e 4 - Utilizando o operador ternário:
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c; //Dentre as opções com operador ternário, essa é a melhor.
    return a + b + c;
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

//Forma 5 - Utilizando o recurso próprio de parâmetro padrão que foi adicionado no Ecma Script 6 (2015):
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));
