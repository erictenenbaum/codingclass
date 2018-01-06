const fs = require('fs');


fs.readFile("best_things_ever.txt", "utf8", (err, data) => {
	let output = data.split(',');

	for(let i = 0; i < output.length; i++) {
		console.log(output[i]);
	}
	
});