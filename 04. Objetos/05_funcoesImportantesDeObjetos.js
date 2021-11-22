const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13,
};

console.log(Object.keys(pessoa)); //"Object.keys" retorna todas as chaves de um objeto.
console.log(Object.values(pessoa)); //"Object.values" retorna todos os valores armazenados em um objeto.
console.log(Object.entries(pessoa)); //"Object.entries" retorna todos os conjuntos chave-valor de um objeto.

//Percorre, uma por uma, todas as entradas de um objeto:
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

//Define propriedades de um objeto de forma mais detalhada:
Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true, //Permite que seja listada por funções como "Object.keys", por exemplo.
    writable: false, //Proíbe que seja editável.
    value: "01/01/2019", //Define o valor da propriedade.
});

pessoa.dataNascimento = "01/01/2017"; //Essa atribuição será ignorada, pois a propriedade "dataNascimento" do objeto "pessoa" está congelada.
console.log(pessoa.dataNascimento);

const objDestino = { a: 1 };
const objOrigem1 = { b: 2 };
const objOrigem2 = { a: 4, c: 3 };
Object.assign(objDestino, objOrigem1, objOrigem2); //O primeiro objeto passado por parâmetro recebe as propriedades de todos os demais objetos. Em caso de possuírem alguma propriedade em comum, o valor dessa propriedade do objeto de destino será substituída pelo valor dessa propriedade do objeto de origem.
console.log(objDestino);
