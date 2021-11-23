//O objetivo do "async-await" é fazer um código assíncrono parecer com um código síncrono, simplificando, assim, o uso de códigos assíncronos. Esse é um recurso adicionado no EcmaScript 8 (2017).

//A palavra reservada "await" só funcionará em funções marcadas com a palavra reservada "async".
const http = require("http");

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let resultado = "";
            res.on("data", (dados) => {
                resultado += dados;
            });

            res.on("end", () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch (e) {
                    reject(e);
                }
            });
        });
    });
};

let obterAlunos = async () => {
    const turmaA = await getTurma("A");
    const turmaB = await getTurma("B");
    const turmaC = await getTurma("C");
    return [].concat(turmaA, turmaB, turmaC);
}; //Funções com "async" vão retornar sempre uma "Promise".

obterAlunos()
    .then((alunos) => alunos.map((a) => a.nome))
    .then((nomes) => console.log(nomes));
