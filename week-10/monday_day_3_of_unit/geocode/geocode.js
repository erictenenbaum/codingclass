var geocoder = require('geocoder');

const input = process.argv;

const output = [];

for (let i = 2; i < input.length; i++) {
	output.push(input[i]);


}

// console.log(input);

// console.log(output.length);

if (output.length > 2) {
	var citySearch = output[0] + " " + output[1] + ", " + output[3];
}
else {

	var citySearch = output[0] + ", " + output[1];

}



// console.log(citySearch);
 
// Geocoding 

function geo(city) {
	geocoder.geocode(city, function ( err, data ) {
  // do something with data 
  	console.log(JSON.stringify(data.results, null, 2));
  	// console.log(data.results[0]);
});

}

geo(citySearch);
