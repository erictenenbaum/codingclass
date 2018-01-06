const fs = require('fs');
var action = process.argv[2];
var dollarAmount = process.argv[3];

switch(action) {
	case "deposit":
	addMoney();
	break;

	case "withdraw":
	subtractMoney();
	// console.log("yo");
	break;

	case "total":
	tallyMoney();
	break;

	case "lotto":
	jackpot();
	break;

	default:
	console.log("I am sorry, I do not recognize your request");
	break;
}


function addMoney() {

	fs.appendFile("bank.txt", ", " + dollarAmount, function(err) {

  // If an error was experienced we say it.
  if (err) {
    console.log(err);
  }

  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
  else {
    console.log("Content Added!");
  }

});
	
};


function subtractMoney() {

	
	fs.readFile("bank.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  // console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");


  // We will then re-display the content as an array for later use.
  // console.log(dataArr);
  

var sum = dataArr.reduce((a, b) => a + b, 0);
console.log(sum);



  // console.log(parseFloat(totalAmount));

  // console.log(parseFloat(dataArr[3]));

});
}