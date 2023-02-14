const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
//importa controllers
const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")
//importa models
const Article = require("./articles/Article")
const Category = require("./categories/Category")

//view engine
app.set('view engine', 'ejs')

//arquivos estáticos
app.use(express.static("public"))


//body parser
//TEM QUE VIR AQUI!
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//database
connection.authenticate()
    .then(()=>{ console.log("conexão com base ok")})
    .catch((error)=>{console.log(error)})

app.use("/", categoriesController) //dizendo que quero usar rotas do arquivo, cabe prefixo
app.use("/", articlesController)




//rotas
app.get("/", (req, res) =>{
    res.render("index")
})

app.listen(8080, ()=>{
    console.log("Servidor rodando na porta 8080")
})