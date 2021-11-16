//Não existe o tipo nativo "array" em JavaScript. Na verdade, ele é considerado um objeto especial que trabalha de forma indexada. Diferentemente de outras linguagens, os arrays sempre são estruturas dinâmicas e heterogêneas no JavaScript. Entretanto, apesar da linguagem fornecer a flexibilidade de criar arrays com dados heterogêneos, as boas práticas dizem para usar arrays de dados homogêneos.
let array = []; //Notação literal de array.
console.log(typeof array);
console.log(typeof Array, typeof new Array(), typeof []); //"Array" é a função.

let aprovados = new Array("Victor", "Carlos", "Ana");
console.log(aprovados);
aprovados = ["Victor", "Carlos", "Ana"]; //Apenas é possível atribuir um novo array com esses valores porque "aprovados" não foi declarado como constante. Se fosse constante, seria permitido apenas alterar os valores contidos dentro do array.
console.log(aprovados[0]); //Acessa uma posição específica do array. Os arrays sempre começam pelo índice "0", como a maioria das demais linguagens de programação.
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); //Normalmente, outras linguagens de programação retornam um erro quando se tenta acessar uma posição não existente do array, mas no caso do JavaScript, a posição é considerada undefined.

aprovados[3] = "Lucas"; //Nesse caso, adiciona uma nova posição no array, mas não é a forma mais usual de se incluir novos dados.
aprovados.push("Zakk"); //A função "push" sempre adiciona, no fim do array, o dado passado por parâmetro. É a forma mais usual e mais indicada de se incluir novos dados em um array.
console.log(aprovados.length); //Exibe o tamanho do array.
aprovados[9] = "Fly"; //Todas as posições entre o índice 3 e o índice 9 são criadas com valor "undefined".
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort(); //Modifica o array passado por parâmetro de forma que os dados fiquem ordenados. Algumas funções retornam um novo array, ao invés de modificar o original.
console.log(aprovados);

delete aprovados[1]; //Remove o dado armazenado no índice "1", mantendo a existência da posição, mas como "undefined".

aprovados = ["Victor", "Carlos", "Ana"];
aprovados.splice(1, 1); //Partindo do índice passado no primeiro parâmetro, remove a quantidade, passada no segundo parâmetro, de posições seguintes. A função "splice", ao contrário do comando "delete" que subtitui o valor contido em um índice por "undefined", realmente exclui a posição do array.
console.log(aprovados);
aprovados.splice(1, 1, "Zakk", "Fly"); //Partindo do índice passado no primeiro parâmetro, remove a quantidade, passada no segundo parâmetro, de posições seguintes e adiciona os valores passados do terceiro parâmetro em diante.
console.log(aprovados);
