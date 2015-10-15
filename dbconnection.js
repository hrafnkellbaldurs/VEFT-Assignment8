'use strict';

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/myapp';
const addCompany = (company, cb) => {
  MongoClient.connect(url, (err, db) => {
    if(err) {
      cb(err);
      db.close();
      return;
    }
    const companies = db.collection('companies');
    companies.insert(company, (ierr, res) => {
      if(ierr) {
        cb(ierr);
        db.close();
        return;
      }

      cb(null, res);
      db.close();
    });
  });
};

const getCompanies = (cb) => {
  MongoClient.connect(url, (err, db) => {
    if(err) {
      cb(err);
      db.close();
      return;
    }
    const companies = db.collection('companies');
    companies.find().toArray((ferr, docs) => {
      if(ferr) {
        cb(ferr);
        db.close();
        return;
      }
      console.log(docs);
      cb(null, docs);
    });
  });
};

module.exports = {
  addCompany: addCompany,
  getCompanies: getCompanies,
};
