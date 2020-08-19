
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").unique().notNullable().primary();
    table.text('first_name').notNullable()
    table.text('last_name').notNullable()
    table.text('username').unique().notNullable()
    table.text('email').unique().notNullable()
    table.text('password').notNullable()
  })
  .createTable('auth_token', (table) => {
    table.increments('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.string('token').unique().notNullable()
  })
};

exports.down = function(knex) {
  
};

// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
//table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).unique().primary()

