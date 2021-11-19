O Node.js faz cache dos módulos, isto é, são instâncias singleton:

```
//Arquivo "instanciaUnica.js":
module.exports = {
    valor: 1,
    inc() {
        this.valor++;
    },
};
```

Enquanto que ao utilizar uma função factory sempre será gerado um novo objeto:

```
//Arquivo "instanciaNova.js":
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++;
        },
    };
};
```

Dessa forma, 2 objetos do node sempre compartilharão suas informações caso não tenham sido gerados por funções factory:

```
const contadorInstanciaUnica1 = require("./instanciaUnica");
const contadorInstanciaUnica2 = require("./instanciaUnica");

contadorInstanciaUnica1.inc();
console.log("Objeto com cache do Node.js: ", contadorInstanciaUnica2.valor); //Retorna "2".

///////////////////////////////////////////////

const contadorInstanciaNova1 = require("./instanciaNova")();
const contadorInstanciaNova2 = require("./instanciaNova")();

contadorInstanciaNova1.inc();
console.log("Função factory: ", contadorInstanciaNova2.valor); //Retorna "1".
```
