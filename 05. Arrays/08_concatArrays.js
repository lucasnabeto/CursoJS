//A função "concat" serve para concatenar vários arrays ou elementos em um novo array.
const filhas = ["Joaquina", "Iolanda"];
const filhos = ["Modesto", "Manoel"];
const todos = filhas.concat(filhos);
console.log(todos);
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])); //É possível usar a função a partir de "[]", que é a notação literal de arrays.
