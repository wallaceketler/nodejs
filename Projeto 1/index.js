const express = require("express"); //importa express
const app = express();              //inicializa o express

//dizendo para express usar EJS como view engine
app.set('view engine', 'ejs')
//dizendo para express aceitar arquivos estáticos como o css
app.use(express.static('public'))

//ao usar o render ele já olha para o diretório views por padrão
app.get('/:nome/:lang', (req,res) => {

    //as variáveis nome e lang estão vindo dos parâmetros de rotas
    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMsg = false
    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-cola", preco: 5},
        {nome: "Leite", preco: 1.45},
        {nome: "Carne", preco: 15},
        {nome: "Redbull", preco: 6},
        {nome: "Nescau", preco: 4},
    ]
    //ao renderizarmos e colocarmos as variáveis que queremos renderizar, enviaremos para o EJS
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Empresa teste",
        msg: exibirMsg,
        produtos: produtos,
    })

})

//inicia o servidor na porta desejada
app.listen(8080, ()=>{
    console.log("Servidor rodando na porta 8080")
})