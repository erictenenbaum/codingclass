var bands = require("./bands.js");



// function myFunction(param) {
// 	if(param === "punk" || param === "rap" || param === "classic") {
// 		if(param === "punk") {
// 			return ("A punk band is " + bands.punk);
// 		}
// 		else if (param === "rap") {
// 			return ("A Rap band is " + bands.rap);
// 		}
// 		else if(param === "classic") {
// 			return ("A classic band is " + bands.classic);
// 		}

// 	}
// 	else {
// 		console.log("A punk band is " + bands.punk);
// 	}
// }

// console.log(myFunction(process.argv[2]));





	for(var key in bands) {
	console.log("A " + key + " band is " + bands[key] + " ")
	}







