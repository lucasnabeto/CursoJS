//Se um módulo retorna uma função, é possível passar parâmetros para esse módulo:
module.exports = function (...nomes) {
    return nomes.map((nome) => `Boa semana, ${nome}`);
};

//O arquivo em que o módulo seria importado deveria ficar da seguinte forma:
const saudacoes = require("./09_modulosComParametros")("Ana", "Carlos"); //Os parâmetros necessários já são enviados no próprio "require".
console.log(saudacoes);
