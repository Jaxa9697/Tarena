/**
 * Created by JAHONGIR-PC on 05/22/2016.
 */
var  mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit : 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tarena',
    multipleStatements: true
});

module.exports = connection;
