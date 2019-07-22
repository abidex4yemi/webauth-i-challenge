const { createSuccess, OK } = require('../../util/success');

/**
 * Log user out
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const logout = (req, res, next) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }

      return next(
        createSuccess({
          message: 'Logged out successfully',
          status: OK,
        }),
      );
    });
  }
};

module.exports = logout;
