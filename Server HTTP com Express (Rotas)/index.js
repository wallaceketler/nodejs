const express = require("express")
const app = express(); 

//rota com parâmetro
app.get("/teste-rota2/:parametro", function(req, res){
    res.send("Bem vindo ao teste de rota! O parâmetro é: " + req.params.parametro)
})

//rota com parâmetro opcional
app.get("/teste-rota3/:parametro2?", function(req, res){
    
    //recuperando query param
    //deve ser usada como ?nome=valor
    var user_param = req.query["idade"]
    
    res.send("Bem vindo ao teste de rota! O parâmetro é: " + req.params.parametro2)
})

//rota sem parâmetro
app.get("/teste-rota", function(req, res){
    res.send("Bem vindo ao teste de rota!")
})

app.listen(4000,
    function(error){
        if(error){
            console.log("Ocorreu um erro!")
        }else{
            console.log("Servidor iniciado com sucesso")
        }
    }
)