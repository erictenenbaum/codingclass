const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "seinfeld_db"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadID)
});


// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();


var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json());


app.get("/cast", function(req, res) {
	
   
            connection.query('SELECT * FROM actors', function(error, results, fields) {

            	var html = "";
                if (error) throw error;
                html = "<h1>" + "Actors Ordered By ID" + "</h1>"

                html += "<ul>"

                for (let i = 0; i < results.length ; i++) {
                	html += "<li>" + results[i].actor_name + "</li>"
                }

                html += "</ul>"
                res.send(html);

              
            });
             


    

});




app.listen(port, function() {
    console.log("App listening on PORT " + port);
});