exports.up = function(knex, Promise) {
    return knex.schema.createTable('tools', table => {
        table.increments('id').primary()
        table.string('title').notNull()
        table.string('link', 1000).notNull()
        table.string('description', 1000).notNull()
        table.string('tags').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tools')
  
};
