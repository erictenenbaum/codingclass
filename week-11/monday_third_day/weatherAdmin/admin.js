var fs = require("fs");


var Admin = function(name) {
    // this.role = role;
    this.name = name;

    this.readText = function() {
        
            fs.readFile("log.txt", "utf8", function(error, data) {
                // If the code experiences any errors it will log the error to the console.
                if (error) {
                    return console.log(error);
                }

                console.log(data);
            });
        
    }

}

module.exports = Admin;

// var eric = new Admin("admin", "eric");

// eric.readText();