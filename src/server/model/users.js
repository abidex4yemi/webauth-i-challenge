const userModels = require('../../db/helpers/user-model');

module.exports = (knex) => {
  const models = userModels(knex);

  return {
    ...models,
  };
};
