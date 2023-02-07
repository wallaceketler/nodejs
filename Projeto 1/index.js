const express = require("express"); //importa express
const bodyParser = require("body-parser")  // importa body parser
const connection = require("./database/database") //importa módulo de conexão criado
const perguntaModel = require("./database/Pergunta") //importa Model de pergunta
const respostaModel = require("./database/Resposta") //importa Model de resposta
const app = express();              //inicializa o express

//DATABASE
connection.authenticate()
    .then(()=>{
    console.log("Conexão feita com sucesso!")})
    .catch((msgErro)=>{
        console.log(msgErro)
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

    perguntaModel.findAll({raw: true, order:[['id', 'DESC']]}).then((Perguntas)=>{
        console.log(Perguntas)
        res.render("index",{
            perguntas: Perguntas
        })
    }) //= SELECT * FROM Perguntas
    
})

app.get("/perguntar", (req, res) =>{
    res.render("perguntar",{})
})

//a rota para salvar a pergunta deve ser post
app.post("/salvarpergunta", (req,res) =>{

    //por meio do body parser, pegamos os dados da seguinte maneira:
    var titulo = req.body.titulo
    var descricao = req.body.descricao

    perguntaModel.create({ // = INSERT INTO Perguntas
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect("/")
    })  

    //res.send("Formulário recebido!" + titulo + descricao)
})

app.post("/responder", (req,res)=>{
    var corpo = req.body.corpo
    var perguntaId = req.body.pergunta
    respostaModel.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(()=>{
        res.redirect("/pergunta/"+perguntaId)
    })
})

app.get("/pergunta/:id", (req,res)=>{

    var id = req.params.id

    perguntaModel.findOne({
        where: {id : id}
    }).then((pergunta)=>{
        if(pergunta != undefined){
           
            respostaModel.findAll({
                where: {perguntaId: pergunta.id},
                order:[
                    ['id', 'DESC'] 
                ]
            }).then((respostas)=>{
                res.render("pergunta",{
                    pergunta:pergunta,
                    respostas: respostas
                })
            })




        }else{
            res.redirect("/")
        }
    })
})

//inicia o servidor na porta desejada
app.listen(8080, ()=>{
    console.log("Servidor rodando na porta 8080")
})