'use strict'

const fs = require('fs');
const path = require('path');
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');

const routes = require('routes');

const app = express();

app.use(cors());

app.use(morgan('combined', {
  stream: fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' }
  )
}));
if (config.MODE === 'development') {
  app.use(morgan('dev'));
};

app.use(routes);

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send("something went wrong")
});

app.listen(config.PORT, () => {
  console.log(
    `listening at http://localhost:${config.PORT} (${config.MODE} mode)`
  );
});
