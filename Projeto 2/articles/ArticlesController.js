//o controller das caterogiras se refere às rotas delas 
const express = require("express")
const router = express.Router() //permite trabalharmos com rotas fora do index.js

router.get("/articles", (req,res)=>{
    res.send("ROTA DE ARTIGOS")
})

router.get("/admin/articles",(req,res)=>{
    res.send("ROTA PARA CRIAR UM NOVO ARTIGO")
})

module.exports = router