//No JavaScript, as classes são meramente um detalhe de sintaxe, implementado no EcmaScript 6 (2015), pois elas sempre são convertidas em funções.
class Teste {}
console.log(typeof Teste); //Retornará que a classe "Teste" é, na verdade, uma função.

class Lancamento {
    constructor(nome = "Genérico", valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    //O símbolo "..." define "lancamentos" como sendo um array com todos os parâmetros passados na chamada da função:
    addLancamentos(...lancamentos) {
        lancamentos.forEach((l) => this.lancamentos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach((l) => {
            valorConsolidado += l.valor;
        });
        return valorConsolidado;
    }
}

const salario = new Lancamento("Salário", 45000);
const contaDeLuz = new Lancamento("Luz", -220);
const contas = new CicloFinanceiro(11, 2021);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());

//Para utilizar herança com classes, utiliza-se a palavra reservada "extends":
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = "Professor") {
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor() {
        super("Silva"); //Invoca a função construtora da classe "Pai". Entretanto, como apenas um parâmetro está sendo passado, a função construtora da classe "Pai" irá utilizar o valor padrão "Professor" para o segundo parâmetro que era esperado.
    }
}

const filho = new Filho();
console.log(filho);
