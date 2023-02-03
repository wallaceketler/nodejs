const express = require("express"); //importa express
const app = express();              //inicializa o express

//dizendo para express usar EJS como view engine
app.set('view engine', 'ejs')
//dizendo para express aceitar arquivos estáticos como o css
app.use(express.static('public'))

//ao usar o render ele já olha para o diretório views por padrão
app.get('/', (req,res) => {

   
    res.render("index",{})

})

app.get("/perguntar", (req, res) =>{
    res.render("perguntar",{})
})

//inicia o servidor na porta desejada
app.listen(8080, ()=>{
    console.log("Servidor rodando na porta 8080")
})