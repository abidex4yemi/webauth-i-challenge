const express = require('express');
const { createUser } = require('../controllers/users');
const { validateUserBody } = require('../middleware');

const router = express.Router();

router.route('/register').post(validateUserBody, createUser);

module.exports = router;
