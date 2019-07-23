const bcrypt = require('bcryptjs');
const { User } = require('../../model');
const {
  createError, NOT_FOUND, GENERIC_ERROR, BAD_REQUEST,
} = require('../../util/error');
const { createSuccess, OK } = require('../../util/success');

/**
 * Login existing user in
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const login = async (req, res, next) => {
  try {
    const credential = req.body.sanitizedBody;

    const user = await User.getByEmail(credential.email);

    if (!user || Object.keys(user).length === 0) {
      return next(
        createError({
          message: 'User does not exist',
          status: NOT_FOUND,
        }),
      );
    }

    const isPasswordValid = await bcrypt.compare(credential.password, user.password);

    if (!isPasswordValid) {
      return next(
        createError({
          message: 'Invalid credential',
          status: BAD_REQUEST,
        }),
      );
    }

    req.session.userID = user.id;

    return res.status(OK).json(
      createSuccess({
        message: 'Log in successful',
        data: { user: user.first_name },
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could not log user in',
        status: GENERIC_ERROR,
      }),
    );
  }
};
module.exports = login;
