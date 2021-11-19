const express = require("express");
const bancoDeDados = require("./12_bancoDeDados");
const bodyParser = require("body-parser");

const porta = 3003;
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //O "use" faz com que todas as requisições feitas para a aplicação obrigatoriamente passem por esse middleware que faz um tratamento no corpo de requisições feitas como "x-www-form-urlencoded".

//Create:
app.post("/produtos", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
    });
    res.send(produto);
});

//Read:
app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos()); //Retorna em formato JSON automaticamente.
});

app.get("/produtos/:id", (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id));
});

//Update:
app.put("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,
    });
    res.send(produto);
});

//Delete:
app.delete("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto);
});

//Define a porta em que o servidor receberá as requisições:
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});
