require("dotenv").config();
var mysql = require('mysql');
const cTable = require('console.table');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "top_songsdb"
});


function startApp() {
    connection.connect(function(err) {
        if (err) throw err;
        promptUser();
    })
}

function findByArtist() {
   inquirer.prompt([/* Pass your questions in here */
   	{
   		type: "input",
   		message: "What Artist would you like to search for?",
   		name: "artist"
   	}]).then(answers => {
    // Use user feedback for... whatever!!
    	connection.query("SELECT artist, song FROM top5000 WHERE artist = ?", [answers.artist],
    		function(error, results, fields) {
    			if(error) throw error;
    			console.table(results);
    			continuePrompt();

    		})
});


    
}

function findMoreThanOnce() {
	connection.query("select artist, COUNT(song) Counts from top5000 " +
" Group By artist " +
" HAVING COUNT(song) >= 2; ", function(error, results, fields) {
	if (error) throw error;
	console.table(results);
	continuePrompt();
})  

}

function findSpecificRange() {
	inquirer.prompt([/* Pass your questions in here */
		{
			type: "input",
			message: "What is the first index of your search?",
			name: "firstIndex"
		},
		{
			type: "input",
			message: "What is the second index of your search?",
			name: "secondIndex"
		}]).then(answers => {
    // Use user feedback for... whatever!!
    	connection.query("SELECT * FROM top5000 WHERE position between " + answers.firstIndex + " AND " + answers.secondIndex,
    		function(error, results, fields) {
    			if (error) throw error;
    			console.table(results);
    			continuePrompt();

    		}) 

});



}

function findSong() {
	inquirer.prompt([/* Pass your questions in here */
   	{
   		type: "input",
   		message: "What Song would you like to search for?",
   		name: "song"
   	}]).then(answers => {
    // Use user feedback for... whatever!!
    	connection.query("SELECT * FROM top5000 WHERE song = ?", [answers.song],
    		function(error, results, fields) {
    			if(error) throw error;
    			console.table(results);
    			continuePrompt();

    		})
});


}

function continuePrompt() {
    inquirer.prompt([ /* Pass your questions in here */ {
        type: "confirm",
        message: "Would you like to continue?",
        name: "continue"
    }]).then(answers => {
        // Use user feedback for... whatever!!

        if (answers.continue) {
            promptUser();
        } else {
            console.log("Goodbye")
            connection.end();
        }
    });
}

function promptUser() {
    inquirer.prompt([ /* Pass your questions in here */ {
        type: "list",
        message: "What would you like to do?",
        choices: ["Find songs by Artist", "Find Artist that appear more than once",
            "Find Data within a specific range", "Search for a specific song"
        ],
        name: "userChoice"
    }]).then(answers => {
        // Use user feedback for... whatever!!
        switch (answers.userChoice) {
            case "Find songs by Artist":
                findByArtist();
                break;

            case "Find Artist that appear more than once":
                findMoreThanOnce();
                break;

            case "Find Data within a specific range":
                findSpecificRange();
                break;

            case "Search for a specific song":
                findSong();
                break;

            default:
                findMoreThanOnce();
                break;

        }

    });


}

startApp();