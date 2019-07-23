/**
 * Application Main file
 */
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const cors = require('cors');

const allErrorHandler = require('./middleware/errorHandler');
const knex = require('../config/database');
const { createSuccess, OK } = require('./util/success');
const { NOT_FOUND } = require('./util/error');
const productRouter = require('./routes/productsRouter');
const userRouter = require('./routes/userRouter');

const app = express();

// Setup session cookie
const store = new KnexSessionStore({
  knex, // configured instance of knex
  tablename: 'sessions', // table that will store sessions inside the db, name it anything you want
  sidfieldname: 'sid', // column that will hold the session id, name it anything you want
  createtable: true, // if the table does not exist, it will create it automatically
  clearInterval: 1000 * 60 * 60,
});

app.use(
  session({
    name: 'waterloo',
    resave: true,
    saveUninitialized: true,
    secret: '@@**&&&$$$',
    cookie: {
      maxAge: 1000 * 60 * 24,
      secure: false,
      httpOnly: true,
    },
    store,
  }),
);

/**
 * Set up middleware
 */
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(helmet());

app.get('/', (req, res) => res.status(OK).json(createSuccess({ message: 'Welcome to API root...', data: [] })));

app.use('/api/v1/auth', userRouter);
app.use('/api/v1', [productRouter]);

// Handle invalid request
app.all('*', (req, res) => res.status(NOT_FOUND).json({
  success: false,
  message: 'Route does not exist...',
  body: [],
}));

// handle all application error
// eslint-disable-next-line max-len
app.use(allErrorHandler());

module.exports = app;
