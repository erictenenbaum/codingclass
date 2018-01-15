// Instructions

// Over the course of this assignment you are going to put together a function 
// which uses constructors and user input to create and manage a team of players.

// Start out by creating a constructor function called "Player" with the following properties and methods...

// name: Property which contains the player's name
// position: Property which holds the player's position
// offense: Property which is a value between 1 and 10 to show how good this player is on offense
// defense: Property which is a value between 1 and 10 to show how good this player is on defense
// goodGame: Method which increases either the player's offense or defense property based upon a coinflip.
// badGame: Method which decreases either the player's offense or defense property based upon a coinflip.
// printStats: Method which prints all of the player's properties to the screen
// Now create a program which allows the user to create 8 unique players; 5 starters and 3 subs. 
// It should take as user input the name, position, offense, and defense of each player.
const inquirer = require('inquirer');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function Player(name, position, offense, defense) {
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;
	this.goodGame = function() {
		if(Math.floor(Math.random() *2) ===0) {
			console.log(this.name + " had a good game!");
			this.offense++;
			this.defense++;
		}
	};
	this.badGame = function() {
		if(Math.floor(Math.random() *2) ===0) {
			console.log(this.name + " had a bad game");
			this.offense--;
			this.defense--;
		}
	};
	this.printStats = function () {
		console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense);
	}

}

// var player1 = new Player ("Eric", "Pitcher", getRandomIntInclusive(1,10), getRandomIntInclusive(1,10));

// player1.printStats();
var count = 0;

var playerArray = [];
var subArray = [];


function createPlayers() {

	if(count > 7) {
		console.log("You've got five players!")
		console.log("===============================")
		console.log("Starters:")
		console.log(playerArray);
		console.log();
		console.log("===================================");
		console.log("Bench:");
		console.log(subArray);

		playGame(0, 0);
	
}
else {
	inquirer.prompt([/* Pass your questions in here */
	{
		type: "input",
		message: "What is your name?",
		name: "name"
	},
	{
		type: "input",
		message: "What is your position?",
		name: "position"
	}]).then(answers => {
    // Use user feedback for... whatever!!
    var player = new Player(answers.name, answers.position, getRandomIntInclusive(1, 10), getRandomIntInclusive(1, 10));

    if (playerArray.length < 5) {
    	playerArray.push(player);
    }
    else {
    	subArray.push(player);
    }

    

    player.printStats();

    count++

    createPlayers();
});

}

}
	

createPlayers();

function playGame (count, score) {

if (count < 6) {
	var rand1 = getRandomIntInclusive(1, 20);
	var rand2 = getRandomIntInclusive(1, 20);
	var totalOffense = 0;
	var totalDefense = 0;

	for (let i = 0; i < playerArray.length; i++) {
		totalOffense += playerArray[i].offense;
	}

	for(let y = 0; y < playerArray.length; y++) {
		totalDefense += playerArray[y].defense;
	}

	if (totalOffense > rand1) {
		score++
		console.log("Total Offense:" + totalOffense);
		console.log("Random Number:" + rand1);
		console.log(score);
		console.log();
		console.log("You're team scored!");
		
	}

	if (totalDefense < rand2) {
		score--
		console.log("Total Dffense:" + totalDefense);
		console.log("Random Number:" + rand2);
		console.log(score);

		console.log();
		console.log("You're team lost a point");		

	}

	inquirer.prompt([/* Pass your questions in here */
			{
				type: "confirm",
				message: "Would you like to make a substitution?",
				// choices: ["Yes", "No"],
				name: "wannaSub1"
			}]).then(answers => {
    // Use user feedback for... whatever!!
    				if(answers.wannaSub1 === "Yes") {
    					console.log("You subbed a player!");

    					var subbedOut = playerArray.pop();
    					var subbedIn = subArray.pop();

    					playerArray.push(subbedIn);
    					subArray.push(subbedOut);

    					console.log("===================================");
    					console.log("===================================");

    					console.log(playerArray);

    					

    					count++

    					playGame(count, score);
    				}
    				else {
    					count++
    					playGame(count, score);
    				}
});

	// count++

	// playGame(count, score);

}

else {
	if(score > 0) {
		for (let i = 0; i < playerArray.length; i++) {
			playerArray[i].goodGame();
			console.log();
			console.log("================================");
			console.log("Good Game " + playerArray[i].name + " !");
			playerArray[i].printStats();
		}
	}
	else{
		for (let x = 0; x < playerArray.length; x++) {
			playerArray[x].goodGame();
			playerArray[x].printStats();
		}
	} 

		// for (let z = 0; z < playerArray.length; z++) {
		// 	console.log(playerArray[z].printStats())
		// }
// DIDN"T GET TO FINISH THIS PART

	inquirer.prompt([/* Pass your questions in here */
		{
			type: "confirm",
			message: "Do you want to play again?",
			// choices: ["Yes", "No"],
			name: "choice"

		}]).then(answers => {
    // Use user feedback for... whatever!!
    	if(answers.choice == true) {
    		playGame(0, 0);
    	}
    	else {
    		console.log("Thanks for playing the game. Let's play again soon!");
    	}
});
}


	
}





// Once all of the players have been created, print their stats.

// Once your code is functioning properly, move on to create a function called "playGame" 
// which will be run after all of the players have been created and will do the following:

// Run 5 times. Each time the function runs:
// Two random numbers between 1 and 20 are rolled and compared against the starters' offensive and defensive stats
// If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
// If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
// After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array 
// with 1 player from within the subs array.
// After the game has finished (been run 5 times):
// If the score is positive, run goodGame for all of the players currently within the starters array.
// If the score is negative, run badGame for all of the players currently within the starters array.
// If the score is equal to zero, do nothing with the starters.
// Give the user a message about if they won, and the status of their starters.
// After printing the results, ask the user if they would like to play again.
// Run playGame from the start once more if they do.
// End the program if they don't.
// HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

// HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, 
// look up Math.random on Google and you should find some resources to help.