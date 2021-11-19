const fs = require("fs"); //File system: é um módulo core do Node.js que serve para fazer leitura e escrita de arquivos do sistema.

const produto = {
    nome: "Celular",
    preco: 1249.99,
    desconto: 0.15,
};

//Caso o arquivo especificado não exista, ele será criado. Caso já exista, então o conteúdo será sobrescrito:
fs.writeFile(
    __dirname + "/11_escrevendoArquivosExemplo.json",
    JSON.stringify(produto),
    (err) => {
        console.log(err || "Arquivo salvo!"); //Valida se houve erro. Se houver, o erro será exibido no terminal. Caso contrário, isto é, caso a escrita tenha sido bem-sucedida, então apenas notificará no terminal que o arquivo foi salvo.
    }
);
