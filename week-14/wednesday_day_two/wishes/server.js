// Dependencies
require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.password,
  database: "wishes_db"
});


app.get("/", function(req, res){
	connection.query("SELECT * FROM wishes", function(error, results, fields){
		if (error) throw error;

		res.render("index", {bacon: results});
		console.log(results);
	});
});

// Still need to do this part of the activity
app.post("/", function(req, res){
	connection.query("INSERT INTO wishes set ?", [{
		wish: req.body.newWish
	}], 
		function(errors, results, fields){
			res.redirect("/");
		})
})


app.listen(port, function () {
    console.log("App listening on PORT " + port);
});