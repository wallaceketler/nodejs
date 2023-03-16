const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const jwt = require("jsonwebtoken")

const JWTSecret = "KASDASDKASD" //Ninguém deve acessar, pois permite gerar tokens fraude

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//middleware para verificar se tem token para acessar rotas
function auth(req,res,next){
    const authToken = req.headers["authorization"]
    
    if(authToken != undefined){

        const bearer = authToken.split(' ') //vai vir como bearer' 'token
        var token = bearer[1]

        jwt.verify(token, JWTSecret, (err, data)=>{
            if(err){
                res.status(401)
                res.json({err:"Token inválido"})
            }else{
                //qualquer rota que utilize esse middleware terá acesso a esses dados
                req.token = token
                req.loggedUser = {id: data.id, email: data.email}
                next()
            }
        })

    }else{
        res.status(401)
        res.json({err: "Token inválido"})
    }
   
}


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
        var user = DB.users.find((u) => u.email == email)
        if(user != undefined){
            if(user.password == password){
                //payload: informações dentro do token para reconhecer usuário Não colocar nada sensível
                jwt.sign({id: user.id, email: user.email}, JWTSecret, {expiresIn:"48h"},
                (err,token)=>{  //callback, pois é assíncrona
                    if(err){
                        res.status(400)
                        res.json({err: "Falha interna"})
                    }else{
                        res.status(200)
                        res.json({token: token})
                    }
                }) 
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
//rota com middleware pra JWT
app.get("/games", auth, (req,res)=>{

    var HATEOAS = [
        {
            href: "http://localhost:8080/game/0",
            method: "DELETE",
            rel: "delete_game"
        },
        {
            href: "http://localhost:8080/game/0",
            method: "GET",
            rel: "get_game"
        },
        {   
            href: "http://localhost:8080/auth",
            method: "POST",
            rel: "login"
        }
    ] //recomendado usar array, não JSON, pois permite que percorramos

    res.status(200)
    res.json({user: req.loggedUser, games: DB.games, _links: HATEOAS})
})

app.get("/game/:id", (req,res)=>{
    
    if(isNaN(req.params.id)){
        res.send("Não é um número")
        res.sendStatus(400)
    }
    else{
        var id = parseInt(req.params.id)
        
        
        var HATEOAS = [
            {
                href: "http://localhost:8080/game/"+id,
                method: "DELETE",
                rel: "delete_game"
            },
            {
                href: "http://localhost:8080/game/"+id,
                method: "PUT",
                rel: "edit_game"
            },
            {
                href: "http://localhost:8080/game/"+id,
                method: "GET",
                rel: "get_game"
            },
            {   
                href: "http://localhost:8080/games",
                method: "GET",
                rel: "get_all_games"
            }
        ] //recomendado usar array, não JSON, pois permite que percorramos
        
        
        
        
        var game = DB.games.find((g)=> g.id == id)
        if(game == undefined){
            res.sendStatus(404)
        }else{
            res.json({game, _links:HATEOAS})
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