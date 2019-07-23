const express = require('express');
const { checkLoggedIn } = require('../middleware');
const { getProducts } = require('../controllers/products');

const router = express.Router();

router
  .route('/products')
  .all(checkLoggedIn)
  .get(getProducts);

module.exports = router;
