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
        res.redirect("admin/articles")
    })
})



module.exports = router