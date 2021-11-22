//A função "filter" serve para gerar um array que possua dados filtrados de outro array. Portanto, sempre retorna um novo array de tamanho igual ou menor que o array original.
const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "iPad Pro", preco: 4199, fragil: true },
    { nome: "Tênis Nike", preco: 699, fragil: false },
    { nome: "Copo de plástico", preco: 18.99, fragil: false },
];
const produtosFiltradosPreco = produtos.filter(
    (produto) => produto.preco > 3000
);
console.log(produtosFiltradosPreco);

let produtosFiltradosPrecoFragilidade = produtos.filter(
    (produto) => produto.preco > 500 && produto.fragil == false
);
console.log(produtosFiltradosPrecoFragilidade);

//Simulando a criação da função "filter":
Array.prototype.filter2 = function (callback) {
    const arrayDestino = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            arrayDestino.push(this[i]);
        }
    }
    return arrayDestino;
};

console.log("\nSimulação da função 'filter':");
produtosFiltradosPrecoFragilidade = produtos.filter2(
    (produto) => produto.preco > 500 && produto.fragil == false
);
console.log(produtosFiltradosPrecoFragilidade);
