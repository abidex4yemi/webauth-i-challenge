// eslint-disable-next-line import/named
const { Product } = require('../../model');
const { OK, createSuccess } = require('../../util/success');
const { createError, GENERIC_ERROR } = require('../../util/error');

/**
 * Get all products
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const getProducts = async (req, res, next) => {
  try {
    const products = await Product.getAll();

    return res.status(OK).json(
      createSuccess({
        data: products,
      }),
    );
  } catch (error) {
    return next(
      createError({
        status: GENERIC_ERROR,
        message: 'Could not get products',
      }),
    );
  }
};

module.exports = getProducts;
