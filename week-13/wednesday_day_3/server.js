// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservations = [{
    name: "Eric",
    phone: "123-456-7890",
    email: "eric@eric.com",
    id: "12"
},
{
    name: "Taylor",
    phone: "987-765-4321",
    email: "taylor@taylor.com",
    id: "4"
}]

var waitList = [];

// Set up routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/form", function (req, res) {
    res.sendFile(path.join(__dirname, "form.html"));
});

app.get("/api/:option?", function (req, res) {

    switch (req.params.option) {
        case "table":
            return res.json(reservations);

        case "wait":
            return res.json(waitList);

        default:
            return res.end("Not Found");
    }

});

app.post("/api/new", function (req, res) {
    console.log("logging");
    var newReservation = req.body;

    console.log(newReservation);

    if (reservations.length < 5) {
        reservations.push(newReservation);
    }
    else {
        waitList.push(newReservation);
    }

    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify({
        success: true
    }));

});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});