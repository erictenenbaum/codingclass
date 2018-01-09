
var firstArray = [];
function getSearchString() {
var searchString = "";

        for (var i = 2; i < process.argv.length; i++) {
            searchString += process.argv[i] + " ";
        }
        // return searchString;

        firstArray.push(searchString.split(" "));

        	return firstArray
 };



 console.log(getSearchString());

 // function myArray(numbers) {
 // 	var numArr = [];

 // 	numbers.split(',');

 // 	// numbers.sort();


 // 	console.log(numbers.length);
 // };




 // if(getSearchString()) {
 // 	myArray(getSearchString());
 // }