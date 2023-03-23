const database = require("./database")

//INSERT
/*
var dados = {
    nome: "Need for Speed Heat",
    preco: 199.90
}

database.insert(dados).into("games").then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
*/

//SELECT
//podemos passar "*" para selecionar tudo no select ou deixar vazio
/*
database.select().table("games").then((data)=>{
    console.log(data)
    console.log("Posso querer apenas ID e Preço")
}).catch((err)=>{
    console.log(err)
})

database.select(["id", "preco"]).table("games").then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
*/

//NESTED QUERY
/*
database.insert({nome: "GTA", preco: 120.0}).into("games").then(()=>{
    database.select().table("games").then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
}).catch((err)=>{
    console.log(err)
})
*/

//WHERE
/*
database.select().where({nome: "GTA"}).orWhere({id: 1}).table("games").then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})

//whereRaw permite que façamos comparações diferentes de igual
database.select().whereRaw("id > 1").table("games").then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})
*/

//QUERY CRUA(raw) (retorna duas colunas)
/*
database.raw("SELECT * FROM games").then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})
*/


//DELETE
/*
database.where({id: 3}).delete().table("games").then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})
*/