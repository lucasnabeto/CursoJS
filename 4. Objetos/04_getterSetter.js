const sequencia = {
    _valor: 1, //Por convenção, o símbolo "_" é adicionado no início de uma variável que o programador pretende que seja acessada apenas internamente.
    //Os métodos "get" costumam ser usados quando se quer fazer algum tipo de tratamento com o que está sendo retornado antes de retornar de fato:
    get valor() {
        return this._valor++;
    },
    //Os métodos "set" costumam ser usados quando se quer fazer algum tipo de tratamento com o que está sendo recebido antes de atribuir de fato:
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor;
        }
    },
};
//Por padrão, o método "get" é chamado em casos de consulta e o método "set" é chamado em casos de atribuição:
console.log(sequencia.valor, sequencia.valor); //Chama duas vezes o método "get".
sequencia.valor = 1000; //Chama o método "set" e realiza a alteração.
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900; //Chama o método "set" e não realiza a alteração.
console.log(sequencia.valor, sequencia.valor);
