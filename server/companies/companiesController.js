var Companies = require('./companiesModel');

// Queries DB for all companies for name, city and state columns. This serves the GET request to '/companies'
var getAll = function(req, res) {
  //Companies.connect();
  Companies.query('select * from fund_list', function(err, results) {
    if (err) {
      console.log('There was an error querying the database:', err);
      console.log(Companies.testtest);

      return res.send(500);
    }
    //Companies.end();
      console.log(Companies.testtest);
    
    res.status(200).json(results);
  });
};

module.exports = {
  getAll: getAll
};
