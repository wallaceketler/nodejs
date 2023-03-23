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
- Usamos relacionamentos na aplicação por performance, pois quando temos relação entre duas tabelas, ao fazermos uma consulta, ocorre JOIN entre elas e não precisamos fazer duas ou mais consultas desnecessárias
- NÃO SE DEVE SALVAR A SENHA DE USUÁRIOS DE FORMA PLANA NO BANCO DE DADOS
- DEVE-SE ENCRIPTAR OU USAR HASH, preferencialmente a segunda opção, pois há como fazer a criptografia reversa e na hash não
- Com npm install --save bcryptjs instalamos ferramenta para has no projeto
- Cookies são arquivos de texto que guardam informações temporárias no browser
- Sessões usam cookies para falar que aquele usuário tem dados salvos, mas guardam as informações no servidor (mais seguro e pode guardar mais coisas)
- Com npm install --save express-session instalamos ferramentas para usar sessions
- Podemos salvar uma session por meio de uma rota no node com o express session, mas para aplicações de larga escala, deve-se usar redis para evitar estouros de memória
- Sessões são encerradas quando o tempo expira e quando servidor cai

  # ECMA JS
- const -> não pode ser alterado, uma vez declarado
- let -> escopos global, local e de bloco (qualquer coisa entre {})
- var -> escopos global e local apenas (se criar dentro de função só funciona ali, fora temos acesso em qualquer lugar)
- parâmetros opcionais -> func(a,b,c = 10){} //guardam valor e devem vir por último
- json encurtado -> ao invés de fazermos var user = { nome : nome, idade: idade }, fazer var user = { nome, idade } basta, de modo que um json com atributos nome e idade serão criados e serão puxadas as informações dessas variáveis declaradas previamente
- operador spread -> dado um json do tipo var empresa = { site: "X", nome: "Y" }, caso queiramos copiar cada um dos atributos desse json em outro json de forma separada, ao invés de escrever var user = { nome, idade, empresa: empresa.nome, site: empresa.site }, basta escrever var user = { nome, idade, ...empresa }. OBS: CASO QUEIRAMOS QUE FIQUE COMO JSON, podemos simplesmente passar como var user = { nome, idade, empresa }
- desestruturação -> var {nome} = user significa que estamos criando uma variável nome com conteúdo do atributo nome do objeto user, o mesmo que var nome = user.nome
- arrow function -> forma reduzida de escrever função ()=>{}. Só pode ser usada como callback ou como declaração depois de igual var func = (a,b,c) => {}. Quando temos apenas um parâmetro podemos não usar os parênteses var func = a => {} ou a => {}. Quando temos apenas uma linha, não precisamos escrever chaves nem do return, ele acontece automaticamente, diferente dos outros formatos que escolhemos ter ou não return
- Find -> acha um único registro em um array, exemplo: var usuario = users.find(user => user.nome == "X"), fará com que a var usuario contenha o objeto com esse nome
- Template Literals -> ao invés de usarmos concatenação de strings, usamos a interpolação em crases, exemplo: `olá meu nome é ${nome}`, muito usado no react
  
  # Programação assíncrona
- Programação síncrona: cada processo espera o anterior acabar para ser executado. Isso pode gerar gargalos
- na assíncrona, independetemente da ordem de chamada de funções, uma pode terminar depois da outra, pois ocorrem de forma concomitante, ou seja, não esperamos uma terminar para chamar a próxima, não é bloqueante
- Deve-se atentar para que nem todos os casos cabem a programação assíncrona, pois existem funções que dependem de outras para serem executadas, como a hash() de uma senha depender da checkEmail()
- Em Javascipt existem 3 formas de trabalhar com programação assíncrona: async/await que são uma evolução das promises, que, por sua vez, são evoluções dos callbacks
- Callback: função executada após uma função assíncrona ser finalizada. Um exemplo no express é o (req,res)=>{}. Os parâmetros do callback vão ser usados para tratar problemas que ocorreram na função assíncrona
- Promises: forma evoluída de callback, usada com then e catch, exemplo:
  ~~~~javascript
          
    function enviarEmail(corpo, para){
      return new Promise((resolve,reject)=>{
        setTimeOut(()=>{      //função assíncrona por natureza do js para esperar
          var deuErro = false
          if(!deuErro){
            resolve() // promessa cumprida
          }else{
            reject()  // promessa deu errado;
          }
        },4000)
      })
    }

    enviarEmail("TESTE", "TESTE").then(()=>{
      console.log("Deu certo!") //entra no resolve()
    }).catch(()=>{
      console.log("Deu errado!")  //entra no reject()
    })

        
  ~~~~
    O then e o catch das promises aceitam apenas um parâmetro, caso queiramos passar mais de um dado devemos passar um json. Devemos evitar ao máximo promises dentro de outras (promise hell)
  
  ~~~~javascript


  //promise hell
  pegarId().then((id)=>{
    buscarEmailNoBanco(id).then((email)=>{
      enviarEmail("Olá, como vai?",email).then(()=>{
        console.log("Email enviado para o usuário com id: " + id)
      }).catch((erro)=>{
        console.log(erro)
      })
    })
  })
  
  ~~~~

    - async/await: uma forma moderna de se livrar do promise hell, pois bloqueia o código na função chamada como await até que seja finalizada. Para que possamos usar o await na chamada de uma função dentro de uma função, a função deve ter o prefixo async

  ~~~~javascript

      async func(){
        await func2()
      }

  ~~~~

    Dessa forma, o código do promise hell apresentado anteriormente ficaria assim:

  ~~~~javascript

    async function Exec(){
      var id = await pegarId()
      var email = await buscarEmailNoBanco(id)
      enviarEmail("Olá, como vai?",email) //não precisa do await, roda assíncrono, não atrapalha desempenho do programa
    }

    
  ~~~~

    Caso queiramos tratar o erro da promise enviarEmail, devemos usar try e catch:

  ~~~~javascript
  
    async function Exec(){
      var id = await pegarId()
      var email = await buscarEmailNoBanco(id)
      try{
        await enviarEmail("Olá, como vai?",email)
        console.log("Ok")
      }catch(erro){
        console.log(erro)
      }
    }

  ~~~~

  # API

- API: Software que permite uma coisa se comunique com outra, interface de comunicação
- Verbos HTTP (camada de aplicação do modelo OSI): get, post, put, patch, delete
- Webservices: uma API que funciona na web por meio do protocolo HTTP
- REST: padrão adotado para que API's funcionem em geral, possui 5 demandas:
  * Cliente-servidor, não pode renderizar html como padrão MVC por exemplo
  * Stateless: não guarda dados de quem fez requisição
  * Cacheável
  * Saber trabalhar com camadas: Não importa o que tenha entre quem requisita e quem responde (middlewares, firewalls, proxies), a API tem que saber trabalhar normalmente
  * Interface uniforme e direta: Rotas devem ser adequadas. Não se deve usar "deletar", "editar" na rota, isso é papel dos verbos HTTP, por exemplo: http://meusite.com/cliente/1, se eu usar o delete ele vai deletar o cliente de ID 1, se eu usar o put ele vai atualizar o cliente de id 1
- Quando a API respeita todas as 5 demandas ela é RESTful. Deve-se, também, evitar rotas que servem para muitas coisas, deve-se particionar, usar os métodos corretos.
- Hateoas: retornar, de uma requisição, além dos dados pedidos, como também uma tabela de links com as utilidades daquilo que você pediu.Ex) você pediu um usuário, vem os dados dele e uma lista de links com utilidades como: deletar, seguir, editar, etc.
- O padrão SOAP retorna apenas XML, o REST retorna JSON, XML, arquivos etc.
- Deve-se verificar que tipo de código retornar antes de fazer isso

  # JWT

- Sigla para JSON Web Token, uma forma de se fazer autenticação de API's, para que tenhamos controle sobre quem pode acessar certas rotas de requisição. (Exemplo seria o caso do cadastro de algum produto sem o usuário estar logado no sistema ainda)
- Em geral, quando alguém loga em um sistema, são gerados cookies de sessão, mas nem todo sistema é web, existem sistemas mobile, ou outras API's que fazem requisições da nossa API, então deve-se generalizar e utilizar JWT
- Com o JWT, a requisição deve ser feita juntamente do token gerado para aquele usuário
  
  # HATEOAS
    
- Último passo para tornar API Restful
- Linka recursos dentro de outros como links dentro de uma página acessada por um link
- Ao fazermos uma requisição, além de retornar os dados pedidos, retorna todos as rotas que podem ser úteis relacionados àquela requisição
- Salvamos uma lista de links da API no código, como uma variável, de modo que se alterarmos o estilo da requisição, não teremos problemas.

  # KNEX JS

- Biblioteca para manipular banco de dados SQL no Node (query builder)
- Existem diferentes abordagens para trabalhar com SQL no Node:
  - A abordagem crua: "SELECT * FROM post"
  - A abordagem ORM(sequelize) Models: Artigos.create({title: "algum titulo"})
  - A abordagem Query Builder(knex) -> banco.select().table("post") gera "SELECT * from post" ou banco.select().where({id: 7}).orWhere({title: "JS"}).orderBy("title").table("post") gera "SELECT * FROM post WHERE id  = 7 OR title = "JS" ORDER_BY title
- Verifique documentação
- Lá descreve que, além de dar npm install knex --save, devemos instalar também a bibilioteca para cada tecnologia usada, por exemplo, mysql, oracledb etc
- Ao trabalhar com Knex, é necessário usar programas como HeidiSQL para criarmos as tabelas e colunas