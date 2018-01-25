require("dotenv").config();
var mysql      = require('mysql');
const cTable = require('console.table');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : process.env.password,
  database : 'playlistDB'
});
 

 function queryDB(command, values) {

	connection.connect();
 
connection.query(command, values, function (error, results, fields) {
  if (error) throw error;
  console.table(results);
});
 
connection.end();

}


queryDB("SELECT * FROM songs where genre = ?", ["dance"]);