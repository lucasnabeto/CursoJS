//O Node.js, apesar de trabalhar com sistema de módulos, também possui um objeto global.

//Para criar um elemendo global, basta utilizar "global.<nome_do_elemento>":
global.MinhaApp = {
    saudacao() {
        return "Estou em todos os lugares!";
    },
    nome: "Sistema Legal",
};
//Dessa forma, é possível que o elemento fique visível por outros arquivos sem que seja preciso exportar o módulo do arquivo em que o elemento está contido. Entretanto, ainda será necessário importar, usando o comando "require", o arquivo no qual o elemento foi declarado dentro do escopo global do Node.js.

//É preciso tomar cuidado quando se trabalha com o escopo global porque o elemento pode ser acessado por qualquer ponto da aplicação, podendo gerar resultados indesejados.
