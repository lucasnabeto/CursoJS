//Funções callback são funções que são enviadas para outras funções e depois são chamadas de volta, uma ou mais vezes, por essas outras funções.
const fabricantes = ["Mercedes", "Audi", "BMW"];
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir); //A função "imprimir" é chamada diversas vezes pela função "foreach".
fabricantes.forEach((fabricante) => console.log(fabricante));

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];
//Sem callback:
let notasBaixas = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);

//Com callback:
notasBaixas = notas.filter((nota) => nota < 7); //Callback usando arrow function.
console.log(notasBaixas);
