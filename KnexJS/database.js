var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1', //localhost
        user: 'root',
        password: '123456',
        database: 'knexjs'

    }
})

module.exports = knex