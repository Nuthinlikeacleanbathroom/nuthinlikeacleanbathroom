var express = require('express');
var companies = require('./companies/companiesController');

module.exports = function(app) {
  app.route('/companies')
    .get(companies.getAll)
}

