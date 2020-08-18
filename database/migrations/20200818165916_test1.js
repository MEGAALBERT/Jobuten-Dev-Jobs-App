exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
        table.text('first_name')
        table.text('last_name')
        table.text('email').unique()
        table.text('username').unique()
        table.text('password')
  })
};

exports.down = function(knex) {
  
};

// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
