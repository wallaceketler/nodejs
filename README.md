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
  - Um VPS (Virtual Private Server) é um computador que você pode alugar para ter controle sobre ele e rodar coisas nele
  - Hospedagem compartilhada é quando temos diferentes usuários utilizando o mesmo computador, sem liberdade de controlar o que instalar
  - Para fazer deploy(postagem) de uma aplicação, existem diversos sites que fornecem serviços, como a digital ocean para VPS
  - Para o deploy é recomendado uma chave SSH para acesso, que pode ser gerada pelo OpenSSH no linux ou com o Putty
  - A chave SSH é dividida em pública e privada, analogamente a um cadeado e a chave do cadeado, respectivamente
  - Ao ter acesso ao nosso servidor, devemos enviar os arquivos da aplicação por meio de algum método, como com o aplicativo filezilla
  - A transferência ocorre por meio do protocolo SFTP (SSH File Transfer Protocol)
  - Devemos enviar todas as pastas da aplicação Node, exceto a node_modules, uma vez que os módulos instalados em determinado sistema muitas vezes não roda em outro e vice versa, portanto, depois de enviar os dados, deve-se usar o comando npm intall, que instala todos módulos usados no projeto de uma só vez graças ao arquivo package.json
  - Ao fazer deploy da aplicação, devemos conseguir acessar o site pela IP:porta
  - Caso queiramos acessar sem falar a porta, devemos definir a porta como 80, pois é o padrão para web
  - Para que a aplicação fique rodando em background de modo que ela fique online e disponível mesmo se o terminal fechasse, devemos instalar no sistema o pm2 com npm install -g pm2 ou no linux sudo npm install -g pm2
  - Ao iniciar a aplicação, ao invés de usarmos o node index.js, usaremos pm2 start index.js
  - Em um banco de dados relacional como o MySQL, existem 3 tipos de relacionamentos:
    * 1 para 1 (como cada atividade possui uma aula)
    * 1 para N (como cada vendedor pode ter vários clientes)
    * N para N (como cada nota fiscal pode ser de vários produtos ao mesmo tempo e cada produto pode estar em várias notas fiscais ao mesmo tempo)