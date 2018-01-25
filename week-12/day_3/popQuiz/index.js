require("dotenv").config();
var mysql = require('mysql');
const cTable = require('console.table');

const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: process.env.password,
	database: "pop_quiz"
});

// connection.connect((err) => {
// 		if(err) throw err;
// 		console.log("connected as id " + connection.threadID)
// });

// function printTable() {
// 	connection.query("SELECT * FROM quiz_table", function(error, results, fields) {
// 		if (error) throw error;
// 		console.table(results);


// 	})
// }


function queryDB(command) {



    connection.query(command, function(error, results, fields) {
        if (error) throw error;
        console.table(results);
        connection.end();
    });

}


queryDB("SELECT * FROM quiz_table");
