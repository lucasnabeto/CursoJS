const produtos = {};

const sequencia = {
    _id: 1,
    get id() {
        return this._id++;
    },
};

function getProdutos() {
    return Object.values(produtos);
}

function getProduto(id) {
    return produtos[id] || {};
}

function salvarProduto(produto) {
    if (!produto.id) {
        produto.id = sequencia.id;
    }
    produtos[produto.id] = produto;
    return produto;
}

function excluirProduto(id) {
    delete produtos[id];
    return Object.values(produtos);
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto };
