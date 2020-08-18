
exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.uuid('id').unique()
        table.text('first_name')
        table.text('last_name')
        table.text('email')
        table.text('username').unique()
        table.text('password')
  })
};

exports.down = function(knex) {
  
};
