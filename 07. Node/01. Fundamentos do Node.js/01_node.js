//O Node.js é extremamente relevante no mundo do JavaScript, inclusive trazendo uma revolução na web como um todo. O Node.js pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o Node.js é possível criar aplicações JavaScript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução.

//Dentro do Node.js, a organização é feita em pastas e arquivos, sendo que cada arquivo representa um módulo. Com isso, por padrão, o código contido dentro de um módulo só é visível para o próprio módulo. Para permitir que esse módulo também seja visível externamente, é necessário exportá-lo e então importá-lo em outro arquivo/módulo.

//Por exemplo, o código abaixo, da forma que está escrito, é visível apenas dentro do próprio arquivo/módulo:
function Pessoa() {
    this.idade = 0;
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}
new Pessoa();
