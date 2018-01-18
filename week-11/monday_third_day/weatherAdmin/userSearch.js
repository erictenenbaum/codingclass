var weather = require("weather-js");
var fs = require("fs");

var User = function(name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now();

    this.logFile = function() {
        fs.appendFile("log.txt", "\n" + "Name: " + this.name + " " 
        	+ "Location: " + this.location + " " + "Date: " + this.date, function(err) {

            // If the code experiences any errors it will log the error to the console.
            if (err) {
                return console.log(err);
            }
        });
    }
    this.getWeather = function() {

        weather.find({ search: this.location, degreeType: 'F' }, function(err, result) {
            if (err) console.log(err);

            console.log(JSON.stringify(result, null, 2));

        

        });

        	this.logFile();

    }
}



module.exports = User;

// var eric = new User("eric", "Gilbert, AZ");

// eric.getWeather();