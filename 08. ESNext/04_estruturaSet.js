//O "set" é uma estrutura de conjunto. Ela não é indexada e não aceita repetição de valores.

//Cria um novo "set" vazio:
const times = new Set();
times.add("Santos"); //Define um elemento.
times.add("Palmeiras");
times.add("Corinthians").add("São Paulo"); //Aceita adições encadeadas.
times.add("Santos"); //Não será adicionado, pois se trata de uma repetição.

console.log(times);
console.log(times.size);
console.log(times.has("santos")); //Retorna "false", pois é case sensitive.
console.log(times.has("Santos")); //Retorna "true".
times.delete("São Paulo"); //Deleta o elemento.

//Também é possível criar um novo "set" já contendo todos os elementos:
const nomes = new Set(["Raquel", "Lucas", "Júlia", "Lucas"]); //Apenas um "Lucas" será incluído no conjunto.
console.log(nomes);
