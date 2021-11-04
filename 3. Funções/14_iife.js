//Immediately Invoked Function Expression (IIFE) serve para quando há o intuito de fugir do escopo global do browser. São funções que são executadas assim que o script é lido, sendo que todos os elementos contidos nessa função serão de escopo local, com exceção de quando há uma referência proposital ao escopo global do browser.
(function () {
    console.log("Será executado na hora!");
    console.log("Foge do escopo mais abrangente!");
})();
//A função inteira deve estar contida dentro de parênteses e possuir mais um conjunto de parentes ao final da declaração da função, para garantir que ela seja executada imediatamente.
