//Closure é o escopo criado quando uma função é declarada. Esse escopo permite que a função acesse e manipule variáveis externas à ela.

//Contexto léxico em ação!
const x = "global";
function fora() {
    const x = "local";
    function dentro() {
        return x; //Retorna "local" no console.
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());
