/**
 * Created by JAHONGIR-PC on 05/22/2016.
 */
var  mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'user',
    password: '2230588@New',
    database: 'new1001',
    multipleStatements: true
});

module.exports = connection;
