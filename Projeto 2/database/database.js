//conexão do backend com o banco de dados

const Sequelize = require('sequelize')

const connection = new Sequelize('blog', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00" //define horário correto para createdAt e UpdatedAt
})

module.exports = connection