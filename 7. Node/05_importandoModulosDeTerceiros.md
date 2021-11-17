O NPM é o gerenciador de pacotes do Node.js, sendo instalado automaticamente junto com o próprio Node.js. Com ele, é possível utilizar módulos de terceiros, que, por padrão, são armazenados dentro da pasta "_node_modules_". Além da pasta "_node_modules_", o NPM também cria o arquivo "_package-lock.json_", que detalha todas as informações da aplicação.

Devido ao fato da pasta "_node_modules_" incluir diversos arquivos de terceiros que podem ser facilmente instalados com o NPM, o ideal é que se acrescente essa pasta no arquivo "_.gitignore_" quando se está utilizando o git como versionador de código da aplicação.

O comando para realizar a instalação de módulos de terceiros é "_npm install <nome_do_modulo>_" ou apenas "_npm i <nome_do_modulo>_", devendo ser feito via terminal. Dessa forma, o módulo será instalado localmente na aplicação. Após isso, basta utilizar o comando "_require_" dentro do módulo em que se quer usar os módulos de terceiros.

Caso haja necessidade de se instalar um módulo de terceiros de forma global, é preciso ter acesso de administrador na máquina e executar o comando "_npm i -g <nome_do_modulo>_" no terminal.
