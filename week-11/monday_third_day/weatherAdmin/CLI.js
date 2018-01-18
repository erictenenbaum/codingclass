var user = require("./userSearch.js");
var admin = require("./admin.js");
var fs = require("fs");


var role = process.argv[2];
var name = process.argv[3];
var location = process.argv[4];

function startApp (role) {
	if(role === "admin" || role === "Admin") {
		var adminConstructor = new admin(name);

		adminConstructor.readText();
	}
	else {
		var userConstructor = new user(name, location);

			userConstructor.getWeather();

	}
}

startApp(role);