//O "map" é uma estrutura dinâmica que armazena pares de chave-valor. Diferentemente dos objetos, em que a chave é sempre uma literal, o "map" aceita funções e objetos como sendo chaves também. Resumindo, o "map" proporciona maior flexibilidade para as chaves. Entretando, apesar da flexibilidade, não é possível possuir chaves repetidas.

//Cria um novo "map" vazio:
const tecnologias = new Map();
tecnologias.set("react", { framework: false }); //Define um conjunto chave-valor.
tecnologias.set("angular", { framework: true });

console.log(tecnologias.get("react")); //Retorna o valor armazenado na chave.
console.log(tecnologias.get("angular").framework);

//Também é possível criar um novo "map" já contendo todos os conjuntos chave-valor:
const chavesVariadas = new Map([
    [function () {}, "Função"],
    [{}, "Objeto"],
    [123, "Número"],
]);
chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor);
});

console.log(chavesVariadas.has(123)); //Valida se a chave existe.
chavesVariadas.delete(123); //Deleta a chave.
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size); //Retorna o número de chaves.
