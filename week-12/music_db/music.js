require("dotenv").config();
var mysql = require('mysql');
const cTable = require('console.table');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.password,
    database: 'music_db'
});

connection.connect(function(err) {
    if (err) throw err;
    createSong();
});



function queryDB(command) {



    connection.query(command, function(error, results, fields) {
        if (error) throw error;
        console.table(results);
        connection.end();
    });

}


function createSong() {

    connection.query("INSERT INTO songs SET ?", [{
        title: "DNCE",
        artist: "Justice",
        genre: "Dance"
    }], function(error, results, fields) {
        if (error) throw error;
        console.log(results);
        queryDB("SELECT * FROM songs");

    });
}


// createSong();