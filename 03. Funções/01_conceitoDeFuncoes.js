//No JavaScript, as funções são consideradas First-Class Object (Citizens), isto é, uma das coisas mais importantes da linguagem. E, portanto, existem diversas formas de se criar uma função em JavaScript.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Criar de forma literal:
function func1() {} //Por padrão, toda função retorna undefined caso não haja um retorno definido explicitamente.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Criar armazenando em uma variável:
const func2 = function () {}; //A variável armazena uma função anônima, isto é, uma função sem nome. Para chamá-la, é necessário chamar a variável que a armazena, no caso, a variável "func2".
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Criar armazenando em um array:
const array = [
    function (a, b) {
        return a + b;
    },
    func1,
    func2,
];
console.log(array[0](2, 3));
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Criar armazenando em um atributo de objeto:
const obj = {};
obj.falar = function () {
    return "Opa!";
};
console.log(obj.falar());
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Criar como arrow function:
const arrowFunc = () => console.log("arrow function!"); //É uma forma mais reduzida de se escrever uma função.
arrowFunc();
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Também é possível passar uma função como parâmetro de outra função:
function run(func) {
    func();
}
run(function () {
    console.log("Executando...");
});
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Uma função também pode retornar outra função:
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    };
}
soma(2, 3)(4); //A função "soma(2, 3)" retorna uma função anônima que recebe "4" como parâmetro. Entretanto, o ideal é deixar mais explícito, de forma que o código fique mais legível:
const resultadoSoma = soma(2, 3);
resultadoSoma(4);
