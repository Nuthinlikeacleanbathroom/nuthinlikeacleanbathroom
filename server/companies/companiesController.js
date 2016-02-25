// Queries DB for all companies for name, city and state columns. This serves the GET request to '/companies'
var getAll = function(req, res) {
  //ClearDB disconnects idle connections so the newest connection must be used on every query
  require('./companiesModel').query('select * from fund_list', function(err, results) {
  Companies.query('select * from fund_list', function(err, results) {
    if (err) {
      console.log('There was an error querying the database:', err);
      return res.send(500);
    }
    
    res.status(200).json(results);
  });

};

module.exports = {
  getAll: getAll
};
