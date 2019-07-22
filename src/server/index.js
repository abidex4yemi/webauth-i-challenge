/**
 * Application Main file
 */
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const { createSuccess, OK } = require('./util/success');

const app = express();

/**
 * Set up middleware
 */
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(helmet());

// handle all application error
// eslint-disable-next-line max-len
app.use([errorHandler.badRequest, errorHandler.notFound, errorHandler.resourceConflict, errorHandler.genericError]);

module.exports = app;
