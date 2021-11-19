const anonimo = process.argv.indexOf("-a") !== -1; //Define que para ser anônimo, é preciso informar a flag "-a" no momento da execução.

//Executar código via terminal com o comando "node <nome_do_arquivo> -a" para anônimo e "node <nome_do_arquivo>" para se identificar:
if (anonimo) {
    process.stdout.write("Olá, anônimo!"); //Escreve a mensagem.
    process.exit(); //Encerra o processo.
} else {
    process.stdout.write("Informe seu nome: "); //Escreve a mensagem.
    //Aguarda a entrada das informações do usuário e escreve a mensagem personalizada:
    process.stdin.on("data", (data) => {
        const nome = data.toString().replace("\n", "");
        process.stdout.write(`Olá, ${nome}!\n`);
        process.exit(); //Encerra o processo.
    });
}
