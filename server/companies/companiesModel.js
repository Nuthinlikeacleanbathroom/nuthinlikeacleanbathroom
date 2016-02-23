var mysql = require('mysql');

var mysqlUri = process.env.CLEARDB_DATABASE_URI || 'localhost';

var connection = mysql.createConnection({
  host: mysqlUri,
  user: 'root',
  password: '',
  database: 'crunchbase'
});

connection.connect();

module.exports = connection;