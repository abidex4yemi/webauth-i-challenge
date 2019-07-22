/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  return knex('products').insert([
    {
      name: 'Oat Meal',
      price: '$2999',
      quantity: 400,
    },
    {
      name: 'Strawberry',
      price: '$2999',
      quantity: 200,
    },
  ]);
};
