const { createError, UNAUTHORIZED } = require('../util/error');

const checkLoggedIn = (req, res, next) => {
  // check if user is logged in
  if (req.session) {
    return next();
  }

  return next(
    createError({
      message: 'You have to log in',
      status: UNAUTHORIZED,
    }),
  );
};

module.exports = checkLoggedIn;
