var sql = require("mysql");
var sql_connection = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "MySQL",
    port: 3306,
    database: "chat"
});

sql_connection.connect(function (err) {
    if (err){
        throw err;
    }
    console.log("Connected succesfully! ☻");
});

module.exports = sql_connection


