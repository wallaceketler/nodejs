const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const session = require("express-session")
const flash = require("express-flash")
const cookieParser = require("cookie-parser")
//conferir biblioteca Validator

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())
//flash é usado para mandar mensagens de erro para o front-end
//flash são sessões que duram apenas uma requisição
//logo, são úteis para persistir informações entre rotas
app.use(flash())
app.use(cookieParser("senhaleatoria"))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.get("/",(req,res)=>{


    //o flash vai atrás de algo com esse nome, se não achar retorna array vazio []
    var emailError = req.flash("emailError")
    var pontosError = req.flash("pontosError")
    var nomeError = req.flash("nomeError")
    var email = req.flash("email")

    //logo, temos que tratar para virar undefined caso não tenha e não []:
    emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError
    pontosError = (pontosError == undefined || pontosError.length == 0) ? undefined : pontosError
    nomeError = (nomeError == undefined || nomeError.length == 0) ? undefined : nomeError
    email = (email == undefined || email.length == 0) ? "" : email

    res.render("index" , { emailError, pontosError, nomeError, email})
})

app.post("/form",(req,res)=>{
    var {email, nome, pontos} = req.body
    //as validações dependem do projeto
    var emailError
    var pontosError
    var nomeError

    if(email == undefined || email == ""){
        emailError = "email não pode ser vazio"
    }
    if(pontos == undefined || pontos > 20){
        pontosError = "a quantidade de pontos não deve passar de 20"
    }
    if(nome == undefined || nome == ""){
        nomeError = "nome não pode ser vazio"
    }
    if(emailError != undefined || pontosError != undefined || nomeError != undefined){
        //flashes para erro
        req.flash("emailError", emailError)
        req.flash("pontosError", pontosError)
        req.flash("nomesError", nomeError)
        //flashes para persistir dados em caso de erro
        req.flash("email", email)

        res.redirect("/")
    }else{
        res.send("Formulário OK")
    }

})


app.listen(8080, (req,res)=>{
    console.log("Servidor rodando na porta 8080")
})