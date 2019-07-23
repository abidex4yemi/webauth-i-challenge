const express = require('express');
const { createUser, login, logout } = require('../controllers/users');
const { validateUserBody, validateLoginBody } = require('../middleware');

const router = express.Router();

router.route('/register').post(validateUserBody, createUser);

router.route('/login').post(validateLoginBody, login);

router.route('/logout').get(logout);

module.exports = router;
