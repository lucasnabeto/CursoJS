//Para exportar elementos de um módulo é possível utilizar a palavra reservada "this" ou os comandos "exports" e "module.exports":
this.ola = "Hello World!";
exports.bemVindo = "Bem vindo ao Node!";
module.exports.ateLogo = "Até logo!";
//O "this" e o "exports" são apenas duas referências ao mesmo objeto que o "module.exports" aponta. Atribuições dadas diretamente ao "exports" não influenciam o "module.exports".

exports = {}; //Não afeta em nada o "module.exports".
console.log(module.exports); //Segue possuindo os atributos "ola", "bemVindo" e "ateLogo".
