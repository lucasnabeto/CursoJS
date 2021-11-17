//Já para importar um módulo dentro de outro módulo, utiliza-se o comando "require" com o módulo desejado sendo passado por parâmetro:
const moduloA = require("./02_exportandoModulos01"); //Não é necessário informar explicitamente a extensão de arquivos que sejam JavaScript. Além disso, o ideal é sempre usar caminhos relativos, ao invés de caminhos absolutos.
console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);

const moduloB = require("./03_exportandoModulos02"); //O nome do arquivo importado é case sensitive apenas no Linux. Já no Windows e no MacOS não importa se o arquivo foi escrito em maiúsculo ou minúsculo. Portanto, é preciso prestar atenção em qual é o sistema operacional do servidor.
console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());

//Com o comando "require" é possível importar módulos próprios, módulos de terceiros e módulos internos do próprio Node.js, que são conhecidos como "módulos core".

//Exemplo de uso de um módulo core:
const http = require("http"); //Módulo core do Node.js.
http.createServer((req, res) => {
    res.write("Bom dia!");
    res.end();
}).listen(8080); //Acessível através da rota "localhost:8080".
