//O operador "..." pode ser chamado de "rest", quando junta elementos, ou de "spread", quando espalha elementos.

//Operador "spread" com objetos:
const funcionario = { nome: "Maria", salario: 1324.99 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

//Operador "spread" com arrays:
const grupoA = ["João", "Pedro", "Glória"];
const grupoFinal = ["Maria", ...grupoA];
console.log(grupoFinal);

//Operador "rest" unificando, em um array, vários elementos separados:
function rest(...produtos) {
    console.log(produtos);
}
rest("Celular", "Tablet");
