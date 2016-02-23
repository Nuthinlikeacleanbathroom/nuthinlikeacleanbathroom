var mysql = require('mysql');

var mysqlUri = process.env.CLEARDB_DATABASE_URL || 'localhost';

var connection = mysql.createConnection({
  host: mysqlUri,
  user: 'root',
  password: '',
  database: 'crunchbase'
});

connection.connect();

module.exports = connection;