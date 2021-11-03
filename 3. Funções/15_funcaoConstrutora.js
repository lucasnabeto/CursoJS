//A palavra reservada "this" torna o elemento público.

function carro(velocidadeMax = 200, delta = 5) {
    //Atributo privado:
    let velocidadeAtual = 0;

    //Método público:
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMax;
        }
    };

    //Método público:
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    };
}
const uno = new carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
