const create = require('../../db/helpers/user-model');

module.exports = (knex) => {
  const models = create(knex);

  return {
    ...models,
  };
};
