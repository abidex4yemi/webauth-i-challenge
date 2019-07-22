/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('products', (products) => {
    products.increments();

    products
      .string('name')
      .notNullable()
      .unique();
    products.string('price').notNullable();
    products.integer('quantity').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('products');
};
