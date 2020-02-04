const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    let createUserTable = `CREATE TABLE IF NOT EXISTS user (
            id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            name varchar(10) NOT NULL,
            email varchar(32) NOT NULL,
            password varchar(64) NOT NULL,
            created_at timestamp)`
    connection.query(createUserTable, (err, results, fields) => {
        if (err) throw error;
    })


});

module.exports = connection;