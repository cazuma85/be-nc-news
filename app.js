const express = require('express');
const apiRouter = require('./router/api.router');
const {
  handlePathErrors,
  internalServerError,
  customErr,
  PSQLErrors,
} = require('./errors/errors.js');

const app = express();

app.use(express.json());

app.use('/api', apiRouter);

app.use(handlePathErrors);
app.use(PSQLErrors);
app.use(customErr);
app.use(internalServerError);

module.exports = app;
