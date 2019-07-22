const productModels = require('../../db/helpers/product-model');

module.exports = (knex) => {
  const models = productModels(knex);

  return {
    ...models,
  };
};
