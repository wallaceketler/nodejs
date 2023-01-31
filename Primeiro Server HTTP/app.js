var http = require("http")

http.createServer(
    function(request,answer){
        answer.end("Informações do site")
    }
).listen(3000)

console.log("Servidor rodando na porta 3000")