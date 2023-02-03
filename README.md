# NODE JS

  - O NODE.JS é um interpretador da linguagem Javascript que permite a execução dela fora dos navegadores web
  - O NODE.JS possui módulos para partimentar e organizar os códigos, de maneira que podemos exportar uma ou várias funções
  - O NODE.JS possui diversos módulos prontos, como o FS e o HTTP
  - Entretanto, não se usa comumente o módulo HTTP, pois o framework Express nos permite isso.
  - Para começar um projeto express podemos usar npm init na pasta que desejarmos criar o projeto e depois npm install express --save para instalar o framework. Ao fazermos estes passos, serão criados os arquivos package.json e veremos em depedencies a versão do express instalada, bem como a pasta node_modules que guarda as bibliotecas instaladas
  - Ao usarmos node + nome do arquivo principal para rodarmos o servidor e abrirmos o localhost+ porta usada teremos o erro CANNOT GET causado pela falta da declaração das rotas
  - a resposta de uma requisição feita em determinada rota do servidor deve ser feita apenas uma vez, caso contrário teremos um erro
  - Para que o servidor seja atualizado depois de uma alteração nos códigos sem precisarmos reiniciá-lo, devemos usar npm install nodemon -g para instalar o nodemon e ao iniciar o arquivo principal devemos usar nodemon + nome arquivo ao invés de node + nove do arquivo
  - Existem, além dos parâmetros de rota, os query params, que são inseridos de forma opcional pelo usuário e podem ser resgatadas em código
  - Quando usamos o método GET em um formulário html puro, os dados, inclusive senhas vão por query params, o que não é bom, o ideal é usar POST, assim como no axios
  - Para receber os dados de uma requisição POST no backend devemos instalar o body parser com npm install body-parser --save
  - Para que isso seja possível, campos de input HTML devem ter name
  - Para salvar os dados do backend no banco de dados SQL, devemos instalar o sequelize com npm install --save sequelize e npm install --save mysql2, pois assim conseguimos alterar o banco de dados com javascript