const config = require('../knexfile.js')
const knex = require('knex')(config)

//chamar as migrations automaticamente
knex.migrate.latest(config)//caso necessario, comentar esta parte para melhor controle de migrations

module.exports = knex