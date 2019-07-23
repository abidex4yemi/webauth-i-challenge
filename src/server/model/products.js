const create = require('../../db/helpers/product-model');

module.exports = (knex) => {
  const models = create(knex);

  return {
    ...models,
  };
};
