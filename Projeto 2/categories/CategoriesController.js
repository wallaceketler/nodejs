//o controller das caterogiras se refere às rotas delas 
const express = require("express")
const router = express.Router() //permite trabalharmos com rotas fora do index.js
//importo model do category para salvar no database
const Category = require("./Category") 
//importa slugify para transformar título em algo otimizado para url
//ex: Computação e informática -> computacao-e-informatica
const slugify = require("slugify")


router.get("/admin/categories/new",(req,res)=>{
    res.render("admin/categories/new")
})

router.post("/categories/save", (req,res)=>{
    var title = req.body.title
    if(title != undefined){
        Category.create({
            title: title,
            slug: slugify(title),
        }).then(()=>{
            res.redirect("/")
        })
    }else{
        res.redirect("/admin/categories/new")
    }
})

router.get("/admin/categories", (req,res)=>{
    res.render("admin/categories/index")
})

module.exports = router