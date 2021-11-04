//Tanto classes quando funções factory servem para criar objetos.
//Abordagem usando classe:
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}.`);
    }
}
const pessoa1 = new Pessoa("João");
pessoa1.falar();

//Abordagem usando função factory:
const criarPessoa = (nome) => {
    return {
        falar: () => console.log(`Meu nome é ${nome}.`), //Não é necessário o uso da palavra reservada "this".
    };
};
const pessoa2 = criarPessoa("Ana");
pessoa2.falar();
