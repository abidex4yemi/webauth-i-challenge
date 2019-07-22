// Export all utility files
const allErrorHandler = require('./errorHandler');
const validateUserBody = require('./validateUserBody');
const validateLoginBody = require('./validateLoginBody');

module.exports = {
  allErrorHandler,
  validateUserBody,
  validateLoginBody,
};
