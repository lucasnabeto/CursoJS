//Parâmetros e retornos são opcionais nas funções de JavaScript.
function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`); //Não possui um retorno explícito. Por padrão é retornado "undefined".
    } else {
        return area; //Possui um retorno.
    }
}
console.log(area(2, 2));
console.log(area(2)); //Retorna "not a number (NaN)" porque faltou enviar um ou mais parâmetros.
console.log(area()); //Retorna "not a number (NaN)" porque faltou enviar um ou mais parâmetros.
console.log(area(2, 3, 17, 22, 44)); //Considera apenas os 2 primeiros parâmetros enviados e ignora os demais, retornando, portanto, o valor "6"
console.log(area(5, 5)); //Devido ao fato de não ter nenhum retorno explícito no "if" da função "área", o console exibirá "undefined".
