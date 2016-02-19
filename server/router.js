var express = require('express');
var companies = require('./companies/companiesController');

module.exports = function(app) {
  app.route('/')
    .get(function(req, res, next) {
    res.json('Hello World');
  });
  
  app.route('/companies')
    .get(companies.getAll);
}
