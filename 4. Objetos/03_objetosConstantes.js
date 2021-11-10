//Quando uma constante é um objeto, essa constante não pode receber outro objeto, porém o objeto que está armazenado nessa constante pode adicionar, alterar ou remover elementos normalmente.
const pessoa = { nome: "João" }; //A constante armazena o endereço da memória que contém esse objeto.
pessoa.nome = "Pedro"; //Atribuição será bem-sucedida, pois o objeto "pessoa" ainda é o mesmo e apenas o conteúdo de um de seus atributos foi alterado.
console.log(pessoa);

try {
    pessoa = {};
} catch {
    console.log("Não é possível apontar para outro endereço da memória.");
}

Object.freeze(pessoa); //A função "freeze" serve para impedir futuras adições, alterações e remoções de elementos do objeto passado por parâmetro.
pessoa.nome = "Maria"; //Essa atribuição será ignorada, pois o objeto "pessoa" está congelado.
console.log(pessoa.nome);
pessoa.endereco = "Rua ABC"; //Essa atribuição será ignorada, pois o objeto "pessoa" está congelado.
delete pessoa.nome; //Essa remoção será ignorada, pois o objeto "pessoa" está congelado.
console.log(pessoa);

//Caso haja necessidade de criar um objeto completamente constante, é possível fazer a declaração dele da seguinte forma:
const carro = Object.freeze({
    marca: "Hyundai",
    modelo: "HB20",
});
console.log(carro);
carro.modelo = "Creta"; //Essa atribuição será ignorada, pois o objeto "carro" está congelado desde a sua declaração.
console.log(carro);
