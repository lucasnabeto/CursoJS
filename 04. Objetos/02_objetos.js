//Objetos são coleções dinâmicas de pares chave/valor.
//É possível criar um novo objeto vazio, através de uma função "Object", e adicionar elemento por elemento:
const produto = new Object();
produto.nome = "Cadeira"; //Primeira forma de adicionar um elemento.
produto["marcaProduto"] = "Genérica"; //Segunda forma de adicionar um elemento.
produto.preco = 220;
console.log(produto);

delete produto.marcaProduto; //Primeira forma de remover um elemento.
delete produto["preco"]; //Segunda forma de remover um elemento.
console.log(produto);

//Como alternativas para a criação de objetos via função "Object" é possível utilizar funções construtoras, funções factory e algumas outras funções específicas.
//Função construtora:
function Produto(nome, preco, desconto) {
    this.nome = nome; //A palavra reservada "this" serve para deixar o elemento público.
    this.getPrecoComDesconto = () => preco * (1 - desconto);
}
const prod1 = new Produto("Caneta", 7.99, 0.15);
const prod2 = new Produto("Notebook", 2998.99, 0.25);
console.log(prod1.getPrecoComDesconto(), prod2.getPrecoComDesconto());

//Função factory:
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        },
    };
}
const func1 = criarFuncionario("João", 7980, 4);
const func2 = criarFuncionario("Maria", 11400, 1);
console.log(func1.getSalario(), func2.getSalario());

//Função "Object.create":
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

//Função específica para converter JSON em objeto:
const json = JSON.parse('{"info":"Sou um JSON."}');
console.log(json.info);

//Por fim, também é possível já criar um objeto contendo todos os elementos, através da notação literal usando "{}":
const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: "Rua ABC",
            numero: 123,
        },
    },
    condutores: [
        {
            nome: "Junior",
            idade: 19,
        },
        {
            nome: "Ana",
            idade: 42,
        },
    ],
    calcularValorSeguro: function () {},
};
carro.proprietario.endereco.numero = 1000; //Primeira forma de alterar o valor de um elemento.
carro["proprietario"]["endereco"]["logradouro"] = "Avenida Gigante"; //Segunda forma de alterar o valor de um elemento.
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores); //Retorna "undefined", pois o objeto "carro" ainda existe, mas sem o objeto interno "condutores".
