function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`;
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desconto: 0.15,
    getPreco,
};

console.log(getPreco()); //Retorna "Not a Number (NaN)" porque o as variáveis "preco" e "desconto" não estão definidas no escopo global.

global.preco = 20;
global.desconto = 0.1;
console.log(getPreco()); //Retorna um número válido, pois agora as variáveis "preco" e "desconto" estão definidas no escopo global.

console.log(produto.getPreco()); //Retorna um número válido, pois as variáveis "preco" e "desconto" estão definidas no escopo do objeto "produto".

const carro = { preco: 50000, desconto: 0.2 };

console.log(getPreco.call(carro, 0.17, "$")); //Primeiro parâmetro da função "call" é o objeto usado de contexto, depois os parâmetros esperados pela função que está sendo chamada, todos separados por vírgulas.
console.log(getPreco.apply(carro, [0.17, "£"])); //Primeiro parâmetro da função "apply" é o objeto usado de contexto, depois um array contendo os parâmetros esperados pela função que está sendo chamada.
