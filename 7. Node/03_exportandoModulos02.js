//Porém, a forma mais comum de se exportar é exportar um objeto inteiro com o comando "module.exports":
module.exports = {
    bomDia: "Bom dia!",
    boaNoite() {
        return "Boa noite!";
    },
};
//Não é possível exportar um objeto inteiro usando apenas o comando "exports".
