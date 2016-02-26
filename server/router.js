var express = require('express');
var fundsController = require('./Funds/FundsController');
var iposController = require('./IPOs/IPOsController');

module.exports = function(app) {
  app.route('/funds')
    .get(fundsController.get);

  app.route('/ipos')
    .get(iposController.get);
};
