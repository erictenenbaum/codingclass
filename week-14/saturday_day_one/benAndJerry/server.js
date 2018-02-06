// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// data
var icecreams = [
     {name: 'vanilla', price: 10, awesomeness: 3},
     {name: 'chocolate', price: 4, awesomeness: 8},
     {name: 'banana', price: 1, awesomeness: 1},
     {name: 'greentea', price: 5, awesomeness: 7},
     {name: 'jawbreakers', price: 6, awesomeness: 2},
   ];


 app.get("/icecreams/:name", function(req, res){
 		// console.log(req.params.name)
 		// res.send(req.paramsname);

 		switch(req.params.name){
 			case "vanilla":
 			return res.render("index", icecreams[0]);

 			case "chocolate":
 			return res.render("index", icecreams[1]);

 			case "banana":
 			return	res.render("index", icecreams[2]);

 			case "greentea":
 			return res.render("index", icecreams[3]);

 			case "jawbreakers":
 			return res.render("index", icecreams[4]);

 			default:
 			return res.render("index", icecreams[0]);
 		}
 }); 

 // app.get("/icecreams/vanilla", function(req, res){
 // 	res.render("index", icecreams[0]);
 // })


app.listen(port, function () {
    console.log("App listening on PORT " + port);
});