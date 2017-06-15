/**
 * Created by JAHONGIR-PC on 05/22/2016.
 */
var  mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit : 10,
    host: 'sql9.freemysqlhosting.net',
    user: 'sql9180311',
    password: 'cRKXTTzIdG',
    database: 'sql9180311',
    multipleStatements: true
});

module.exports = connection;
