var express = require('express');
var funds = require('./funds/fundsController');

module.exports = function(app) {
  app.route('/funds')
    .get(funds.getAll)
};
