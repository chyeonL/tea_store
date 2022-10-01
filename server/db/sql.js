const mysql = require('mysql');

let conn =  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'tea_store' 
});

module.exports = conn