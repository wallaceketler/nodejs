//o controller das caterogiras se refere às rotas delas 
const express = require("express")
const { default: slugify } = require("slugify")
const router = express.Router() //permite trabalharmos com rotas fora do index.js
const Category = require("../categories/Category")//importa Model de categorias
const Article = require("./Article")

router.get("/articles", (req,res)=>{
    res.send("ROTA DE ARTIGOS")
})

router.get("/admin/articles",(req,res)=>{
    Article.findAll({
        //faz join com a tabela category e puxa dados dela também
        include: [{model: Category}]
    }).then((articles)=>{
        res.render("admin/articles/index",{articles: articles})
    })
    
})

router.get("/admin/articles/new", (req,res)=>{
    Category.findAll().then((categories)=>{
        res.render("admin/articles/new",{categories:categories})
    })
        
})

router.post("/articles/save", (req,res)=>{
    var title = req.body.title
    var body = req.body.body
    var category = req.body.category

    Article.create({
        title: title,
        slug: slugify(title),
        body:body,
        //o categoryID é chave estrangeira do model Category e serve para criar relacionamento
        categoryId: category
    }).then(()=>{
        res.redirect("/admin/articles")
    })
})

router.post("/articles/delete", (req,res)=>{
    var id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            Article.destroy({
                where:{
                    id:id
                }
            }).then(()=>{
                res.redirect("/admin/articles")
            })
        }else{//NÃO FOR NÚMERO
            res.redirect("/admin/articles")
        }
    }else{ //UNDEFINED
        res.redirect("/admin/articles")
    }
})

//responsável por ir para tela de edição de determinado artigo
router.get("/admin/articles/edit/:id",(req,res)=>{
    
    var id = req.params.id

    if(isNaN(id)){
        res.redirect("/admin/articles")
    }
    Article.findByPk(id).then((article)=>{
        Category.findAll().then((categories)=>{
            if(article != undefined){
                res.render("admin/articles/edit",{article:article, categories:categories})
            }else{
                res.redirect("/admin/articles")
            }
        })
    }).catch((error)=>{
        res.redirect("/admin/articles")
    })
})

//realiza atualização no banco de dados do artigo em questão
router.post("/articles/update", (req,res)=>{
    var id = req.body.id
    var title = req.body.title
    var body = req.body.body
    var category = req.body.category

    Article.update({title: title, slug: slugify(title), body: body, categoryId: category},
    {where:{
        id:id
    }}).then(()=>{
        res.redirect("/admin/articles")
    })
    
})

//paginação
router.get("/articles/page/:num",(req,res)=>{
    var page = parseInt(req.params.num) //página
    var offset = 0            //em qual artigo começa a página

    if(isNaN(page) || page == 0){
        offset=0
    }else{
        offset = parseInt(page) * 4 //4 artigos por página
    }

    Article.findAndCountAll({

        offset: offset,
        order: [
            ["id", "DESC"]
        ], limit:4
    }).then((articles)=>{

        var next
        if(offset + 4 >= articles.count){
            next = false
        }else{
            next = true
        }

        var result = {
            page: page,
            next: next,
            articles: articles
        }


        //res.json(result)

  
        Category.findAll().then((categories)=>{
            res.render("admin/articles/page",{result:result, categories: categories})
        })
        
    })
})



module.exports = router