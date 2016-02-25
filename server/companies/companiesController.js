var Companies = require('./companiesModel');

// Queries DB for all companies for name, city and state columns. This serves the GET request to '/companies'
var getAll = function(req, res) {
  Companies.query('select * from fund_list', function(err, results) {
    if (err) {
      console.log('There was an error querying the database:', err);
      return res.send(500);
    }
    res.status(200).json(results);
    // Companies.end();
  });
};

module.exports = {
  getAll: getAll
};
