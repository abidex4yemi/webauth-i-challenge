/**
 * products query builder
 *
 * @param {Object} knex
 * @returns {Object} {get, insert, update, remove}
 */
export default (knex) => {
  function getAll() {
    return knex('products');
  }

  function getById(id) {
    return knex('products')
      .where({ id })
      .first();
  }

  function insert(product) {
    return knex('products')
      .insert(product)
      .then(([id]) => getById(id));
  }

  function update(id, changes) {
    return knex('products')
      .where({ id })
      .update(changes)
      .then(count => (count > 0 ? getById(id) : null));
  }

  function remove(id) {
    return knex('products')
      .where({ id })
      .del();
  }

  // User is the model name
  return {
    name: 'Products',
    getById,
    insert,
    update,
    remove,
    getAll,
  };
};
