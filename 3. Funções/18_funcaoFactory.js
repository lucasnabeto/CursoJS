//As funções fábrica (factory function) servem para gerar diversos objetos sem a necessidade de declarar um por um manualmente.
//Declaração manual:
const prod1 = {
    nome: "...",
    preco: 45,
};

const prod2 = {
    nome: "...",
    preco: 45,
};

//Factory simples - Útil para quando se quer criar vários objetos iguais:
function criarProduto() {
    return {
        nome: "Celular",
        preco: 1899.49,
    };
}
console.log(criarProduto());

//Factory personalizado - Útil para quando se quer criar vários objetos diferentes:
function criarProdutoParametrizado(nome, preco) {
    return {
        nome: nome,
        preco, //Quando o parâmetro tem o mesmo nome da propriedade do objeto, não é obrigatório deixar a atribuição explícita.
        desconto: 0.1, //Valores fixos também são aceitos.
    };
}
console.log(criarProdutoParametrizado("Notebook", 2149.49));
console.log(criarProdutoParametrizado("iPad", 1199.49));
