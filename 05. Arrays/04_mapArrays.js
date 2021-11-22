//A função "map" serve para mapear um array dentro de um novo array de mesmo tamanho, transformando ou não os dados do array original. Internamente, a função "map" possui a função "for".
const numeros = [1, 2, 3, 4, 5];
let resultados = numeros.map((numero) => numero * 2);
console.log("array original:", numeros);
console.log("array map:", resultados);

//Com a função "map" também é possível converter o tipo dos dados e usar transformações sucessivas:
const soma10 = (elemento) => elemento + 10;
const triplo = (elemento) => elemento * 3;
const converteEmDinheiro = (elemento) =>
    `R$ ${parseFloat(elemento).toFixed(2).replace(".", ",")}`;
resultados = numeros.map(soma10).map(triplo).map(converteEmDinheiro);
console.log("array map encadeado: ", resultados);

//Extraindo informação de JSON com a função "map":
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caneta", "preco": 1.80}',
];
let arrayDePrecos = carrinho.map((item) => JSON.parse(item)["preco"]);
console.log("\nConvertendo JSON: ", arrayDePrecos);

//Simulando a criação da função "map":
Array.prototype.map2 = function (callback) {
    const arrayDestino = [];
    for (let i = 0; i < this.length; i++) {
        arrayDestino.push(callback(this[i], i, this));
    }
    return arrayDestino;
};

console.log("\nSimulação da função 'map':");
arrayDePrecos = carrinho.map2((item) => JSON.parse(item)["preco"]);
console.log(arrayDePrecos);
