const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'testuser1',
  password: 'xxxx',
  database: 'testdb_1'
});
module.exports = connection;