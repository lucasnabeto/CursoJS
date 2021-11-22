//O "promise" é usado quando se há a intenção de realizar um processamento assíncrono. Existem dois finais possíveis para um "promise": promessa resolvida ou promessa rejeitada.
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(frase); //Quando uma promessa é atendida, a função "resolve" é chamada. Essa função aceita apenas um único parâmetro.
            } catch (erro) {
                reject(erro); //Quando uma promessa é recusada, a função "reject" é chamada. Essa função aceita apenas um único parâmetro.
            }
        }, segundos * 1000);
    });
}

falarDepoisDe(2, "Que legal!")
    .then((frase) => frase.concat("?!?")) //Com a função "then" é possível acessar o retorno de uma promessa que foi resolvida.
    .then((outraFrase) => console.log(outraFrase)) //É possível encadear várias funções "then".
    .catch((erro) => console.log(erro)); //Com a função "catch" é possível acessar o retorno de uma promessa que foi recusada.
