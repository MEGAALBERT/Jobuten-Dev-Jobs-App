
exports.up = function (knex) {
  //create table users
  return knex.schema.createTable("users", (table) => {
    //table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).unique().primary()
    table.increments("id").unique().notNullable().primary();
    table.text('username').unique().notNullable()
    table.text('email').unique().notNullable()
    table.text('password').notNullable()
  })
    // create table auth/token
  .createTable('auth_token', (table) => {
    table.increments('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.string('token').unique().notNullable()
  })
};

exports.down = function (knex) {
  // delete table git 
  return knex.schema.dropTable('auth_token').then(function () {
    return knex.schema.dropTable('users');
  });
};

// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

