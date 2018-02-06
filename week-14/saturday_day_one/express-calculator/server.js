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



app.get("/:operation/:numberOne/:numberTwo", function (req, res) {

	var numOne = parseInt(req.params.numberOne);
	var numTwo = parseInt(req.params.numberTwo);

    switch (req.params.operation) {
        case "add":
            return res.send( (numOne + numTwo).toString());

        case "subtract":
            return res.send((numOne - numTwo).toString());

        case "multiply":
            return res.send((numOne * numTwo).toString());

        case "divide":
            return res.send((numOne / numTwo).toString());    


        default:
            return res.end("Not Found");
    }

});



app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });