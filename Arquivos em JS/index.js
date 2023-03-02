const fs = require("fs") //file system

//leitura de arquivos
fs.readFile("./teste.txt",{encoding: 'utf-8'},(erro,dados)=>{
    if(erro){
        console.log("Ocorreu um erro")
    }else{
        console.log(dados)
    }
})  

//escrita de arquivos

fs.writeFile("./teste.txt","NOVO TEXTO", (erro)=>{
    if(erro){
        console.log("Não deu para escrever")
    }
})

//leitura de JSON, alteração e transformação em string de novo

//readFile é uma função assíncrona por natureza 
//mas ela é mais antiga que o conceito de promises, logo, funciona com callback
//isso imposibilita o retorno

fs.readFile("./usuario.json", {encoding: "utf-8"},(erro,dados)=>{
    if(erro){
        console.log(erro)
    }else{
        var conteudo = JSON.parse(dados)

        conteudo.nome = "alteração"
        conteudo.curso = "alteração2"

        fs.writeFile("./usuario.json",JSON.stringify(conteudo),(erro)=>{
            if(erro){
                console.log(erro)
            }
        })

        console.log(conteudo)
    }
})