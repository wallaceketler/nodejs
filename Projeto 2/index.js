//coisas úteis
const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const session = require("express-session")
//importa controllers
const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")
const usersController = require("./user/usersController")
//importa models
const Article = require("./articles/Article")
const Category = require("./categories/Category")
const User = require("./user/User")

//view engine
app.set('view engine', 'ejs')

//sessions
app.use(session({
    //max age determina o tempo de duração da sessão (login, por exemplo) em milisegundos
    secret: "algoaleatorioparasegunraça", cookie: { maxAge: 3000000 } 
}))

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
app.use("/", usersController)




//rotas
app.get("/", (req, res) =>{

    Article.findAll({
        order: [
            ["id", "DESC"]
        ], limit:4
    }).then((articles)=>{

        Category.findAll().then((categories)=>{
            res.render("index", {articles: articles, categories: categories})
        })
        
    })
    
})

app.get("/:slug",(req,res)=>{
    var slug = req.params.slug
    Article.findOne({
        where:{
            slug:slug
        }
    }).then((article)=>{
        if(article != undefined){
            Category.findAll().then((categories)=>{
                res.render("article", {article: article, categories: categories})
            })
        }else{
            res.redirect("/")
        }
    }).catch((error)=>{
        res.redirect("/")
    })
})


app.get("/category/:slug", (req,res)=>{
    var slug = req.params.slug
    Category.findOne({
        where: {
            slug: slug
        },include: [{model:Article}]
    }).then((category)=>{
        if(category != undefined){

            Category.findAll().then((categories)=>{
                res.render("index", {articles: category.articles, categories: categories})
            })
            
        }else{
            res.redirect("/")
        }
    }).catch((error)=>{
        res.redirect("/")
    })
})

app.listen(8080, ()=>{
    console.log("Servidor rodando na porta 8080")
})