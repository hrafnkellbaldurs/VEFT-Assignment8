'use strict';

const port = 4000;
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('node-uuid');
const db = require('./dbconnection');
const _ = require('lodash');
const app = express();

app.use(bodyParser.json());

/* HELPER FUNCTIONS */

/* COMPANY */
app.get('/api/company', (req, res) => {
  db.getCompanies((err, dbres) => {
    if(err) {
      return res.send('ERROR: ' + err);
    }
    console.log(dbres);
    res.json(dbres);
  });
});

app.get('/api/company/:id', (req, res) => {
  res.send('GET company id');
});

app.post('/api/company', (req, res) => {
  const data = req.body;
  db.addCompany(data, (err, dbres) => {
    if(err) {
      return res.send('ERROR: ' + err);
    }
    res.status(201).send(dbres);
  });
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
