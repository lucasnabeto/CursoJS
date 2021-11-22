const soma = function (x, y) {
    return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
};

imprimirResultado(3, 4); //Considera a função "soma", pois é um parâmetro padrão da função.
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function (x, y) {
    return x - y;
});
imprimirResultado(3, 4, (x, y) => x * y); //Arrow function é um tipo de função anônima.

const pessoa = {
    falar: function () {
        console.log("Opa");
    },
};
