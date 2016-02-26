module.exports = {
  get: function(callback) {
    var query = 'SELECT * FROM ipos';
    //ClearDB disconnects idle connections so the newest connection must be used on every query
    require('../database').query(query, function(err, results) {
      if (err) {
        console.error('Error querying the database:', err);
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
};