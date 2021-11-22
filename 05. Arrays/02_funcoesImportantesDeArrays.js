const pilotos = ["Vettel", "Alonso", "Raikkonen", "Gasly"];
console.log(`array inicial: ${pilotos}`);

//Adiciona uma nova posição no início do array:
pilotos.unshift("Hamilton");
console.log(`unshift:\t${pilotos}`);

//Adiciona uma nova posição no fim do array:
pilotos.push("Verstappen");
console.log(`push:\t\t${pilotos}`);

//Remove a primeira posição do array:
pilotos.shift();
console.log(`shift:\t\t${pilotos}`);

//Remove a última posição do array:
pilotos.pop();
console.log(`pop:\t\t${pilotos}`);

//Retorna um novo array a partir de uma determinada posição:
const algunsPilotos1 = pilotos.slice(1); //Pega todas as posições do índice passado por parâmetro em diante.
console.log(`slice 1:\t${algunsPilotos1}`);
const algunsPilotos2 = pilotos.slice(2, 4); //Pega todas as posições a partir do índice passado no primeiro parâmetro até o índice anterior ao passado no segundo parâmetro.
console.log(`slice 2:\t${algunsPilotos2}`);
