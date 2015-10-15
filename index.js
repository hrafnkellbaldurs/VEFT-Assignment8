'use strict';

const port = 4000;
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('node-uuid');
const _ = require('lodash');
const app = express();

app.use(bodyParser.json());

/* HELPER FUNCTIONS */

/* COMPANY */
app.get('/api/company', (req, res) => {
  res.send('GET company');
});

app.get('/api/company/:id', (req, res) => {
  res.send('GET company id');
});

app.post('/api/company', (req, res) => {
  res.send('POST company');
});

/* USER */
app.get('/api/user', (req, res) => {
  res.send('GET users');
});

/* PUNCHCARD */
app.post('/api/punchcard/:company_id', (req, res) => {
  res.send('POST punchcard');
});

app.listen(port, () => {
  console.log('Server is on port ', port);
});
