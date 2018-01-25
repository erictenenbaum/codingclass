require("dotenv").config();
var mysql      = require('mysql');
const cTable = require('console.table');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : process.env.password,
  database : 'music_db'
});
 

connection.connect(function(err) {
	if(err) throw err;
	console.log('connected as id ' + connection.threadId);
	readDatabase();
});

const readDatabase = () => {
	connection.query('select * from songs', (err, res) => 
		{
			if (err) throw err;
			console.log(res);
			connection.end();
		});
}