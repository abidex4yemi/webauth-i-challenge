/**
 * users query builder
 *
 * @param {Object} knex
 * @returns {Object} {get, insert, update, remove}
 */
const create = (knex) => {
  function getAll() {
    return knex('users');
  }

  function getById(id) {
    return knex('users')
      .where({ id })
      .first();
  }

  function insert(user) {
    return knex('users')
      .insert(user)
      .then(([id]) => getById(id));
  }

  function update(id, changes) {
    return knex('users')
      .where({ id })
      .update(changes)
      .then(count => (count > 0 ? getById(id) : null));
  }

  function remove(id) {
    return knex('users')
      .where({ id })
      .del();
  }

  // User is the model name
  return {
    name: 'User',
    getById,
    insert,
    update,
    remove,
    getAll,
  };
};

module.exports = create;
