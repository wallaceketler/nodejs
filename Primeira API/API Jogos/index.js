const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//base de dados falsa
var DB = {
    games:[
        {
            id: 23,
            title: "Call of Duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Need for Speed Payback",
            year: 2017,
            price: 60
        },
        {
            id: 77,
            title: "League of Legends",
            year: 2009,
            price: 60
        },
    ],
    
}

app.get("/games", (req,res)=>{
    res.statusCode = 200
    res.json(DB.games)
})

app.get("/game/:id", (req,res)=>{
    if(isNaN(req.params.id)){
        res.send("Não é um número")
        res.sendStatus(400)
    }
    else{
        var id = parseInt(req.params.id)
        var game = DB.games.find((g)=> g.id == id)
        if(game == undefined){
            res.sendStatus(404)
        }else{
            res.json(game)
        }
    }
})

app.post("/game", (req,res)=>{
    var {title, price, year} = req.body

    DB.games.push({
        id: 2323,
        title,
        price,
        year
    })

    res.sendStatus(200)
})

app.delete("/game/:id", (req,res)=>{
    if(isNaN(req.params.id)){
        res.send("Não é um número")
        res.sendStatus(400)
    }
    else{
        var id = parseInt(req.params.id)
        var index = DB.games.findIndex((g)=> g.id == id)
        if(index == -1){
            res.sendStatus(404)
        }else{
            DB.games.splice(index,1)
            res.sendStatus(200)
        }
    }
})

app.put("/game/:id", (req,res)=>{
    if(isNaN(req.params.id)){
        res.send("Não é um número")
        res.sendStatus(400)
    }
    else{
        var id = parseInt(req.params.id)
        var game = DB.games.find((g)=> g.id == id)
        if(game == undefined){
            res.sendStatus(404)
        }else{
            
            var {title, price, year} = req.body

            if(title != undefined){game.title = title}
            if(price != undefined){game.price = price}
            if(year  != undefined){game.year  = year }

            res.sendStatus(200)
            
        }
    }
})

app.listen(8080, ()=>{
    console.log("API Rodando na porta 8080")
})