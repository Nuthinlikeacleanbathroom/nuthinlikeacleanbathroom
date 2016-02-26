module.exports = {
  get: function(callback) {
    // Queries DB for all companies for name, city and state columns. This serves the GET request to '/companies'
    var query = 'SELECT * FROM fund_list';
    //ClearDB disconnects idle connections so the newest connection must be used on every query
    require('../database').query(query, function(err, results) {
      if (err) {
        console.log('Error querying the database:', err);
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
};