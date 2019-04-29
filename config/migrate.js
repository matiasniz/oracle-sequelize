exports.up = function(knex) {
    return knex.schema
      .createTable('user', function (table) {
         table.increments('id');
         table.string('first_name', 255).notNullable();
         table.string('last_name', 255).notNullable();
      })
      .createTable('product', function (table) {
         table.increments('id');
         table.decimal('price').notNullable();
         table.string('name', 1000).notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTable("product")
        .dropTable("user");
  };
  
  exports.config = { transaction: false };