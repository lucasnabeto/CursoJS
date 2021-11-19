const fs = require("fs"); //File system: é um módulo core do Node.js que serve para fazer leitura e escrita de arquivos do sistema.
const caminho = __dirname + "/10_lendoArquivoExemplo.json"; //A constante "__dirname" já é predefinida pelo Node.js, podendo ser chamada de qualquer arquivo. Ela sempre retorna o diretório no qual o arquivo em que ela foi chamada está localizado.

//Existem dois tipos de leitura: a síncrona, que o código para de ser executado até que a leitura do arquivo seja concluída, e a assíncrona, que o código segue sendo executado em paralelo com a leitura do arquivo.

//Leitura síncrona:
const leituraSincrona = fs.readFileSync(caminho, "utf-8"); //É importante sempre especificar o encoding do arquivo que será acessado.
console.log(`Leitura síncrona:\n${leituraSincrona}`);

//Leitura assíncrona:
fs.readFile(caminho, "utf-8", (err, conteudoArquivo) => {
    //É possível passar uma função de callback para realizar tratamento de erros e manipulações de conteúdo dos arquivos.
    const leituraAssincrona = JSON.parse(conteudoArquivo);
    console.log(
        `Leitura assíncrona: ${leituraAssincrona.db.host}:${leituraAssincrona.db.port}`
    );
});

//Para o caso específico de leitura de arquivos JSON, é possível usar a própria função "require":
const jsonComRequire = require("./10_lendoArquivoExemplo.json");
console.log("Leitura de JSON com 'require': ", jsonComRequire.db);

//Também é possível obter todos os arquivos dentro de um determinado diretório através da função "readdir":
fs.readdir(__dirname, (err, arquivos) => {
    console.log("Todos os arquivos do diretório: ", arquivos);
});
