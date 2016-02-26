var express = require('express');
var fundsController = require('./Funds/FundsController');

module.exports = function(app) {
  app.route('/funds')
    .get(fundsController.get);
};
