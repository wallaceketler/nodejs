//MODEL DE TABELA 
//EM GERAL ESCREVEMOS MODEL EM MAIÚSCULO NA PRIMEIRA LETRA

const Sequelize = require("sequelize")
const connection  = require("./database")

const Pergunta = connection.define('perguntas',{
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//sincroniza e atualiza a base de dados
//com o force como false ele não cria se já existir uma tabela com esse nome
Pergunta.sync({force: false}).then(()=>{})