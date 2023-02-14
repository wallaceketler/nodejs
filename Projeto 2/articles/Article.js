//MODEL do article
const Sequelize = require("sequelize")
const connection = require("../database/database")
//importa Model de category para fazer relacionamento
const Category = require("../categories/Category") 

const Article = connection.define("articles",{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body:
    {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//relacionamento
//1 artigo tem 1 categoria
//1 categoria tem muitos 1 ou muitos artigos
Category.hasMany(Article)
Article.belongsTo(Category)

//Article.sync({force: true})

module.exports = Article