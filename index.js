'use strict';

const port = 4000;
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('node-uuid');
const _ = require('lodash');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(201).send('POST');
});

app.listen(port, () => {
  console.log('Server is on port ', port);
});
