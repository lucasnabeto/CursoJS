const pessoa = {
    saudacao: "Bom dia!",
    falar() /* É possível criar uma função diretamente dentro de um objeto desde o Ecma Script 6 (2015) */ {
        console.log(this.saudacao);
    },
};
pessoa.falar();
const falar = pessoa.falar;
falar(); //Conflito entre paradigmas: funcional vs OO.

const falarDePessoa = pessoa.falar.bind(pessoa); //A função "bind" é responsável por amarrar um determinado objeto para ser o dono da execução de um método sempre que esse método for chamado. Dessa forma, ao usar o "this", ele fica vinculado ao próprio objeto em que está contido.
falarDePessoa();

function funcPessoa() {
    this.idade = 0;
    setInterval(
        function () {
            this.idade++;
            console.log(this.idade);
        }.bind(this), //Sem o "bind", o resultado dos incrementos será Not a Number (NaN), pois a variável "idade" incrementada é diferente da que foi inicializada na linha 15.
        1000
    );
}
new funcPessoa();

//Entretanto, existe uma forma de contornar a necessidade de uma função bind:
function funcPessoa2() {
    this.idade = 0;
    const self = this; //Ao armazenar o contexto da variável "idade" em uma constante ou variável, é possível acessá-la diretamente nas linhas 32 e 33
    setInterval(
        function () {
            self.idade++;
            console.log(self.idade);
        }, //Sem o "bind", o resultado dos incrementos será Not a Number (NaN), pois a variável "idade" incrementada é diferente da que foi inicializada na linha 15.
        1000
    );
}
new funcPessoa2();
