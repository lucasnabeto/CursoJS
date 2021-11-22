//Tagged templates: processa o template string dentro de uma função.
function real(partes, ...valores) {
    const resultado = [];
    console.log("partes: ", partes);
    console.log("valores: ", valores);
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
        resultado.push(partes[indice], valor);
    });
    return resultado.join(""); //Retorna uma string com todos os elementos do array concatenados.
}
const preco = 29.99;
const precoParcela = 11;
console.log(`1x de ${preco} ou 3x de ${precoParcela}`);
console.log(real`1x de ${preco} ou 3x de ${precoParcela}`);
