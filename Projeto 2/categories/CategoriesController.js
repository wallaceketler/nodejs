//o controller das caterogiras se refere às rotas delas 
const express = require("express")
const router = express.Router() //permite trabalharmos com rotas fora do index.js

router.get("/categories", (req,res)=>{
    res.send("ROTA DE CATEGORIAS")
})

router.get("/admin/categories",(req,res)=>{
    res.send("ROTA PARA CRIAR UMA NOVA CATEGORIA")
})

module.exports = router