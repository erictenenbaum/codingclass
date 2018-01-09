// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require('inquirer');
inquirer.prompt([/* Pass your questions in here */
	{"type" : "input",
	"message" : "What day is it?",
	"name" : "day"
},
{
	"type" : "input",
	"message" : "When is your birthday?",
	"name" : "birthday"
}, {
	"type" : "list",
	"message" : "what is your fav color?",
	"choices" : ["green", "blue", "red"],
	"name" : "color"
	

}]).then(answers => {
    // Use user feedback for... whatever!!

    console.log(answers.day);
    console.log(answers.birthday);
    console.log(answers.color);
});