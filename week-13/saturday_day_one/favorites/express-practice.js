var express = require('express')
var app = express()
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');


// var logger = function (req, res, next) {
//   console.log("Logging");
//   next();
// }

// app.use(logger);

// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'))

app.get('/blocks', function (req, res) {
  var blocks = ["fixed", "movable", "rotating"];
  res.json(blocks);

});



app.listen(3000)