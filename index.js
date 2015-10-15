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

/* Gets a list of all registered companies */
app.get('/api/company', (req, res) => {
  db.getCompanies({}, (err, dbres) => {
    if(err) {
      return res.send('ERROR: ' + err);
    }
    res.json(dbres);
  });
});

/* Gets a single company with the given id */
app.get('/api/company/:id', (req, res) => {
  res.send('GET company id');
});

/* Registers a company */
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

/* Gets a list of all registered users */
app.get('/api/user', (req, res) => {
  res.send('GET users');
});

/* PUNCHCARD */

/* Creates a new punch card for the company with the given company_id */
app.post('/api/punchcard/:company_id', (req, res) => {
  res.send('POST punchcard');
});

/* This Web API listens to port 4000 */
app.listen(port, () => {
  console.log('Server is on port ', port);
});
