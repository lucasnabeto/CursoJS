const http = require("http");

const getTurmaCallback = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(url, (res) => {
        let resultado = "";

        res.on("data", (dados) => {
            resultado += dados;
        });

        res.on("end", () => {
            callback(JSON.parse(resultado));
        });
    });
};

let nomes = [];

//Callback hell - Inferno de callback's:
getTurmaCallback("A", (alunos) => {
    nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
    getTurmaCallback("B", (alunos) => {
        nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
        getTurmaCallback("C", (alunos) => {
            nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
            console.log("Usando callbacks:\n", nomes);
        });
    });
});

//Usando "promises":
const getTurmaPromisse = (letra) => {
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
                } catch (erro) {
                    reject(erro);
                }
            });
        });
    });
};

//Dispara todas as funções em paralelo e espera o retorno de todas as "promises" antes de chamar os métodos "then" e "catch":
Promise.all([
    getTurmaPromisse("A"),
    getTurmaPromisse("B"),
    getTurmaPromisse("C"),
])
    .then((turmas) => [].concat(...turmas))
    .then((alunos) => alunos.map((aluno) => aluno.nome))
    .then((nomes) => console.log("Usando promises:\n", nomes))
    .catch((erro) => console.log(erro.message)); //Sempre importante realizar o tratamento de erros.

getTurmaPromisse("D").catch((erro) =>
    console.log("Promise rejeitada: ", erro.message)
);
