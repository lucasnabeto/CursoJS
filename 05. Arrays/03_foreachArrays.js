let aprovados = ["Agatha", "Daniel"];

//O "forEach" sempre passa 3 parâmetros para a função de callback. O nome dos parâmetros podem ser personalizados, mas o conteúdo será sempre o mesmo: valor, índice e array completo, sempre nessa ordem.
aprovados.forEach(function (nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
});

//Formas alternativas de percorrer o array usando o "forEach":
aprovados.forEach((nome) => console.log(nome));
const listaAprovados = (nomeAprovado) => console.log(nomeAprovado);
aprovados.forEach(listaAprovados);

//Simulando a criação da função "forEach":
Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
aprovados = ["Paiva", "Oliveira", "Raquel"];
console.log("\nSimulação da função 'forEach':");
aprovados.forEach2(function (nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
});
