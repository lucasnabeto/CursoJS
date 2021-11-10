//JSON (JavaScript Object Notation) é um formato textual para representação de dados e atualmente é talvez o formato mais utilizado para interoperabilidade entre sistemas, independentemente da linguagem de programação utilizada no desenvolvimento desse sistema. Por ser um formato textual, o JSON não carrega funções contidas em objetos.
const objetoBase = {
    a: 1,
    b: 2,
    c: 3,
    soma: function () {
        return this.a + this.b + this.c;
    },
};
const jsonDerivado = JSON.stringify(objetoBase);
console.log(`JSON gerado a partir de um objeto: ${jsonDerivado}`); //Converte o objeto JavaScript para o formato textual do JSON, excluindo a função "soma".

const jsonBase = `
{
    "a": 1.5, 
    "b": [2, 7], 
    "c": [
        {
            "x": 5, 
            "y": 10
        },
        {
            "z": 100
        }
    ],
    "d": "Teste"
}`; //Todos os atributos de um JSON devem ser delimitados por aspas duplas. Por isso, a string completa deve ser delimitada por aspas simples ou crases. Crases são obrigatórias em casos de strings com múltiplas linhas.
const objetoDerivado = JSON.parse(jsonBase);
console.log("Objeto gerado a partir de um JSON:", objetoDerivado);
