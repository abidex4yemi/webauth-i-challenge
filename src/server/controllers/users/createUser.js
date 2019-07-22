const bcrypt = require('bcryptjs');
const { User } = require('../../model');
const { createSuccess, CREATED } = require('../../util/success');
const { createError, GENERIC_ERROR } = require('../../util/error');
/**
 * Create new user
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createUser = async (req, res, next) => {
  try {
    const userDetails = req.body.sanitizedBody;

    const salt = bcrypt.genSalt(10);

    userDetails.password = bcrypt.hash(userDetails.password, salt);

    const user = await User.createUser(userDetails);

    return res.status(CREATED).json(
      createSuccess({
        message: 'New user created',
        data: user,
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could not create new user',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = createUser;
