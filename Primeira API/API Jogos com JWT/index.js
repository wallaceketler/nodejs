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
    users: [
        {
            id: 1,
            name: "Wallace Ketler",
            email: "exemplo@email.com",
            password: "1234"
        },
        {
            id: 20,
            name: "Clara Viglioni",
            email: "exemplo2@email.com",
            password: "4567"
        }
    ]
}

app.post("/auth",(req,res)=>{

    var {email, password} = req.body

    if(email != undefined){
        DB.users.find((u) => u.email == email)
        if(user != undefined){
            if(user.password == password){
                res.status(200)
                res.json({token: ""})
            }
            else{
                res.status(401)
                res.json({err: "Credenciais inválidas"})
            }
        }else{
            res.status(404)
            res.json({err: "Email não existe na base de dados"})
        }

    }else{
        res.status(400)
        res.json({err: "Email inválido"})
    }

})

app.get("/games", (req,res)=>{
    res.statusCode(200)
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