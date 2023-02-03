const express = require("express"); //importa express
const bodyParser = require("body-parser")  // importa body parser
const connection = require("./database/database") //importa módulo de conexão criado
const app = express();              //inicializa o express

//DATABASE
connection.authenticate().then(()=>{
    console.log("Conexão feita com sucesso!").catch((msgErro)=>{
        console.log(msgErro)
    })
})


//DEFINIÇÕES
//dizendo para express usar EJS como view engine
app.set('view engine', 'ejs')
//dizendo para express aceitar arquivos estáticos como o css
app.use(express.static('public'))
//decodifica dados enviados em formulários por método post
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//ROTAS
//ao usar o render ele já olha para o diretório views por padrão
app.get('/', (req,res) => {

   
    res.render("index",{})

})

app.get("/perguntar", (req, res) =>{
    res.render("perguntar",{})
})

//a rota para salvar a pergunta deve ser post
app.post("/salvarpergunta", (req,res) =>{

    //por meio do body parser, pegamos os dados da seguinte maneira:
    var titulo = req.body.titulo
    var descricao = req.body.descricao

    res.send("Formulário recebido!" + titulo + descricao)
})

//inicia o servidor na porta desejada
app.listen(8080, ()=>{
    console.log("Servidor rodando na porta 8080")
})