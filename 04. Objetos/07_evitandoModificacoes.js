//O JavaScript é conhecido por sua flexibilidade, mas existem funções que colocam um pouco mais de ordem nele, impedindo modificações e trazendo mais previsibilidade para o código, por exemplo.
//"Object.preventExtensions()" - Impede que um objeto seja estendido com adição de novos atributos, mas a modificação e a remoção de atributos ainda serão permitidas:
const produto = Object.preventExtensions({
    nome: "Qualquer",
    preco: 1.99,
    tag: "promoção",
});
console.log(produto);

produto.descricao = "Borracha escolar branca"; //Não surtirá nenhum efeito no objeto.
produto.nome = "Borracha"; //O atributo "nome" será modificado.
delete produto.tag; //O atributo "tag" é removido.
console.log(produto);

//"Object.seal()" - Impede que atributos sejam adicionados ou removidos, mas ainda permite a modificação dos valores desses atributos:
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
pessoa.sobrenome = "Silva"; //Não surtirá nenhum efeito no objeto.
delete pessoa.idade; //Não surtirá nenhum efeito no objeto.
pessoa.nome = "Joana"; //O atributo "nome" será modificado.
console.log(pessoa);

//"Object.seal()" - Impede que atributos sejam adicionados, modificados ou removidos:
const carro = Object.freeze({ marca: "Hyundai", modelo: "HB20", ano: 2013 });
carro.paisOrigem = "Coreia do Sul"; //Não surtirá nenhum efeito no objeto.
carro.modelo = "Creta"; //Não surtirá nenhum efeito no objeto.
delete carro.ano; //Não surtirá nenhum efeito no objeto.
console.log(carro);
