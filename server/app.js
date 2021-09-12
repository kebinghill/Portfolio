const path = require('path');
const express = require('express');

const app = express();
module.exports = app;

// body parsing middleware
app.use(express.json());

// api routes
app.use('/api', require('./api'));

// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const appleKeyId = '56GJ2SQ252';
// const appleTeamId = '5SCR5ULXQW';

// const jwtToken = jwt.sign({ iss: appleTeamId }, process.env.APPLE_PRIVATE_KEY, {
//   algorithm: 'ES256',
//   expiresIn: '180d',
//   header: {
//     alg: 'ES256',
//     kid: appleKeyId,
//   },
// });
// console.log(jwtToken);

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', '/public')));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

//sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/public/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
