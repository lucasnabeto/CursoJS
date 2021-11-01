function soBoaNoticia(nota) {
    if (nota > 7) {
        //Se nota for maior do que 7.
        console.log("Aprovado com " + nota);
    }
}
soBoaNoticia(8.1);
//---------------------------------------------------------------------------------------------------------------------------------------//
function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log("É verdade..." + valor);
    }
}
//False:
seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(0);
//True:
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});
//---------------------------------------------------------------------------------------------------------------------------------------//
function teste1(num) {
    if (num > 7) console.log(num);
    console.log("Final");
}
teste1(6);
teste1(8);

function teste2(num) {
    if (num > 7); //Cuidado com o ";", não usar com as estruturas de controle.
    {
        console.log(num); //Sempre executará esse bloco.
    }
    console.log("Final");
}
teste2(6);
teste2(8);
//---------------------------------------------------------------------------------------------------------------------------------------//
const imprimirResultado = function (nota) {
    if (nota >= 7) {
        //Se nota for maior do que 7.
        console.log("Aprovado!");
    } else {
        //Caso contrário...
        console.log("Reprovado!");
    }
};
imprimirResultado(10);
imprimirResultado(4);
imprimirResultado("Epa!"); //Cuidado: apesar de ser errado comparar string com número, o JavaScript vai comparar e retornar false!
//---------------------------------------------------------------------------------------------------------------------------------------//
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
};

const imprimirResultadoEntre = function (nota) {
    if (nota.entre(9, 10)) {
        console.log("Quadro de Honra");
    } else if (nota.entre(7, 8.99)) {
        console.log("Aprovado");
    } else if (nota.entre(4, 6.99)) {
        console.log("Recuperação");
    } else if (nota.entre(0, 3.99)) {
        console.log("Reprovado");
    } else {
        console.log("Nota inválida");
    }
};

imprimirResultadoEntre(10);
imprimirResultadoEntre(8.9);
imprimirResultadoEntre(6.55);
imprimirResultadoEntre(2.3);
imprimirResultadoEntre(-1);
imprimirResultadoEntre(11);
