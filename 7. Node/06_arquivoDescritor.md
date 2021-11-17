O arquivo descritor, chamado "_package.json_", serve para descrever informações a respeito da aplicação. Informações como nome, versão, autores, licenças e dependências (como módulos de terceiros, por exemplo) da aplicação.

Para criar o arquivo descritor, basta usar o comando "_npm init_" no terminal. Ao executar esse comando, diversas perguntas sobre o projeto serão realizadas. Para criar da forma padrão, sem ter que responder cada uma dessas perguntas, é preciso usar o comando "_npm init -y_", que responde automaticamente todas as perguntas com "sim".

As dependências dentro do arquivo "_package.json_" podem possuir permissões de update:

```
|símbolo|mudança|exemplo|
|   ^   | minor |^0.17.1|
|   ~   |  fix  |~0.17.1|
```

Caso nenhum símbolo seja informado, a depêndencia deverá ser exatamente a versão especificada. Além disso, se houver um arquivo "_package-lock.json_", as versões das dependências especificadas nele sobrescreverão as especificadas pelo arquivo "_package.json_".
