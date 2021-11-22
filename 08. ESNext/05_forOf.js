//Diferentemente do for-in que itera em cima dos índices, o for-of itera em cima dos valores.
const assuntosEcmaScript = ["Map", "Set", "Promise"];
for (let i in assuntosEcmaScript) console.log("for-in: ", i); //Exibe os índices.
for (let assunto of assuntosEcmaScript) console.log("for-of: ", assunto); //Exibe os valores.

//Também é possível iterar estruturas "map":
const assuntosMap = new Map([
    ["Map", { abordado: true }],
    ["Set", { abordado: true }],
    ["Promise", { abordado: false }],
]);

for (let assunto of assuntosMap) {
    console.log(assunto); //Exibe os conjuntos chave-valor.
}

//Por padrão, usar explicitamente "assuntosMap.entries()" é o mesmo que usar apenas "assuntosMap":
for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, " -> ", valor); //Exibe os conjuntos chave-valor de forma desestruturada.
}

for (let chave of assuntosMap.keys()) {
    console.log(chave); //Exibe as chaves.
}

for (let valor of assuntosMap.values()) {
    console.log(valor); //Exibe os valores.
}

//Iterando estruturas "set":
const assuntosSet = new Set(["Map", "Set", "Promise"]);
for (let assunto of assuntosSet) {
    console.log(assunto);
}
