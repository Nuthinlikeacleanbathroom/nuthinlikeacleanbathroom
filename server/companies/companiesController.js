var Companies = require('./companiesModel');

// Queries DB for all companies for name, city and state columns. This serves the GET request to '/companies'
var getAll = function(req, res) {

<<<<<<< HEAD
  Companies.query('select * from fund_list', 
    function(err, results) {
      if (err) {
        return console.log('There was an error querying the database: ', err);
      }
      res.status(200).json(results);
    });
=======
  Companies.query('select * from fund_list', function(err, results) {
    if (err) {
      console.log('There was an error querying the database:', err);
      return res.send(500);
    }
    res.status(200).json(results);
  });
>>>>>>> 230925203d92e5b35363f3654b813a43cc6b8f22

};

module.exports = {
  getAll: getAll
};
