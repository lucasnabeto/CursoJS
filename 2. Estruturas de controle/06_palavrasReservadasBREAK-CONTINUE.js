//As palavras reservadas "break" e "continue" causam um desvio no código. O "break" serve para sair das estruturas "switch", "while", "do-while" e "for" em que está imediatamente contido, cancelando os comandos restantes dos blocos dessas estruturas e seguindo com a execução dos comandos posteriores a esses blocos. Já o "continue", que não influencia em nada no "switch", serve para pular para a próxima iteração do laço de repetição ("while", "do-while", "for") em que está imediatamente contido.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let x in nums) {
    if (x == 5) {
        break; //Cancela o "for" após a quinta iteração.
    }
    console.log(`BREAK - índice ${x} = ${nums[x]}`);
}

for (let x in nums) {
    if (x == 5) {
        continue; //Ignora os comandos restantes da repetição atual (quinta iteração) e pula para a próxima iteração (sexta iteração) do "for".
    }
    console.log(`CONTINUE - índice ${x} = ${nums[x]}`);
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Existe também o break rotulado - que sempre deve ser evitado!!! -, capaz de definir qual laço de repetição ("while", "do-while", "for") cancelar:
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
externo: for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) {
            break externo; //Cancela o laço de repetição mais externo, ao invés de cancelar o laço de repetição em que está imediatamente contido.
        }
        console.log(`Par = ${a}, ${b}`);
    }
}
