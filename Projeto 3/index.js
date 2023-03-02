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