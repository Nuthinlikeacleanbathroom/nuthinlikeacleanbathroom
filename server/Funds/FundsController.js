var Funds = require('./FundsModel');

module.exports = {
  //Get all funds
  get: function(req, res) {
    Funds.get(function(err, results) {
      if(err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  }
};
