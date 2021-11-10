//Herança é a capacidade de receber de um objeto pai (protótipo) atributos e comportamentos para serem reaproveitados. Por padrão, sempre que um objeto é criado, ele aponta, através do atributo "__proto__", para "Object.prototype" para identificar qual é seu objeto pai. Já o "Object.prototype" em si possui um objeto pai nulo.
const ferrari = {
    modelo: "F40",
    velMax: 340,
};

console.log(ferrari.__proto__); //Atributo que todo objeto tem, que aponta para o objeto pai.
console.log(ferrari.__proto__ === Object.prototype); //Objetos não possuem o atributo "prototype", apenas o atributo "__proto__".
console.log(Object.prototype.__proto__ === null);

//Cadeia de protótipos (prototype chain):
const avo = { attr1: "A", attr3: "C do avô" };
const pai = { __proto__: avo, attr2: "B", attr3: "C do pai" };
const filho = { __proto__: pai, attr3: "C do filho" };
console.log(filho.attr1); //Quando o próprio objeto não possui o elemento desejado, ele busca no objeto pai. Nesse caso, como nem o objeto pai possui o elemento, uma nova busca é feita no objeto avô. E essa busca se seguiria através de toda a cadeia de protótipos até chegar em "Object.prototype".
console.log(filho.attr1, filho.attr2, filho.attr3); //Quando o próprio objeto já possui o elemento desejado, esse elemento que é utilizado, independente do objeto pai ter ou não esse mesmo elemento.
console.log(filho.attr1, filho.attr2, filho.__proto__.__proto__.attr3); //Quando o próprio objeto já possui o elemento desejado, mas há a necessidade de usar o elemento de mesmo nome que foi definido em outro dos objetos da cadeia de protótipos, utiliza-se o atributo "__proto__".

const carro = {
    velAtual: 0,
    velMax: 350,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h.`;
    },
};

const volvo = {
    modelo: "V40",
    velMax: 200, //Shadowing - Quando um objeto possui um elemento com o mesmo nome de um elemento do objeto pai.
    status() {
        return `${this.modelo}: ${super.status()}`; //"super" serve para chamar um elemento do objeto pai.
    },
};
Object.setPrototypeOf(volvo, carro); //Esta é uma outra forma de definir o protótipo (segundo parâmetro da função) de um determinado objeto (primeiro parâmetro da função).
volvo.acelerarMais(100); //Função do objeto pai.
console.log(volvo.status()); //Retorna que a velocidade máxima é "200" ao invés do "350" definido no objeto "carro" porque o "this" da função "status()" no momento da execução referencia o objeto "volvo".

//A função "Object.create()" também serve para definir o protótipo de um objeto:
const objPai = { nome: "Pedro", corCabelo: "preto" };

const objFilha1 = Object.create(objPai); //O objeto "objPai" é definido como sendo protótipo do objeto "objFilha1".
objFilha1.nome = "Ana"; //Cria o atributo "nome", causando um efeito de shadowing no atributo do objeto pai.
console.log(
    `Me chamo ${objFilha1.nome} e tenho cabelo ${objFilha1.corCabelo}.`
);

const objFilha2 = Object.create(objPai, {
    nome: { value: "Bia", writable: false, enumerable: false },
});
console.log(
    `Me chamo ${objFilha2.nome} e tenho cabelo ${objFilha2.corCabelo}.`
);

console.log(Object.keys(objFilha1)); //Não lista elementos recebidos por herança, apenas os do próprio objeto.
console.log(Object.keys(objFilha2)); //Retorna um array vazio, pois o atributo "nome" do objeto "objFilha2" possui o valor "false" na propriedade "enumerable", o que faz com que não seja listado.

//Utilizando um "for", é possível percorrer tanto os elementos próprios, quanto os elementos recebidos por herança:
for (let key in objFilha1) {
    objFilha1.hasOwnProperty(key) //Função que analisa se o atributo é do próprio objeto ou não.
        ? console.log(`Atributo próprio: ${key}`)
        : console.log(`Atributo por herança: ${key}`);
}

//Quando um objeto é criado a partir de uma função construtora, seu atributo "__proto__" aponta para o objeto que está no atributo "prototype" dessa função, ao invés de apontar para "Object.prototype":
function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const meuObj1 = new MeuObjeto();
const meuObj2 = new MeuObjeto();
console.log(meuObj1.__proto__ === meuObj2.__proto__);
console.log(MeuObjeto.prototype === meuObj1.__proto__);

MeuObjeto.prototype.nome = "Segredo";
MeuObjeto.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}.`);
};
console.log(MeuObjeto.prototype);
meuObj1.falar();
meuObj2.nome = "Rafael";
meuObj2.falar();

const meuObj3 = {}; //Por padrão, o atributo "__proto__" aponta para "Object.prototype".
meuObj3.__proto__ = MeuObjeto.prototype; //Dessa forma, o atributo "__proto__" passa a apontar para "MeuObjeto.prototype".
meuObj3.nome = "Silva";
meuObj3.falar();

//Resumo com assertivas verdadeiras:
console.log("\n---------> RESUMO <---------");
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
