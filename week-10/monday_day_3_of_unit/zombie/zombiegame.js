// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================
// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).
// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 
// The game ends when you or the zombie gets to 0 health. 
// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt. 
// ===========================================================================================================

const inquirer = require("inquirer");



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function zombieRoll(humanHealth, zombieHealth) {
    console.log("New Round");
    console.log("Human Health is: " + humanHealth);
    console.log("Zombie health is: " + zombieHealth);

    if (humanHealth <= 0) {
        console.log("You just died dude! Try again next time");
    } else if (zombieHealth <= 0) {
        console.log("You survived! While not as fun as Nazi Zombies on Call of Duty, that was still sorta fun, right?");
    } else {

        inquirer.prompt([{
            type: "list",
            message: "Try to stay alive. Pick a number between 1-5.",
            choices: ["1", "2", "3", "4", "5"],
            name: "number"

        }]).then(number => {

            var randomNumber = getRandomIntInclusive(1, 5);

            // console.log(randomNumber);

            if (randomNumber == number.number) {
                console.log("You hit the Zombie! Great shot old sport!");
                var zHealthDeduction = getRandomIntInclusive(1, 5);
                console.log("This much health was taken away from the zombie: " + zHealthDeduction);


                zombieHealth = zombieHealth - zHealthDeduction;
                humanHealth = humanHealth;
                zombieRoll(humanHealth, zombieHealth);

            } else {
                console.log("The Zombie hit you! Try to duck or dodge next time");

                var hHealthDeduction = getRandomIntInclusive(1, 5);
                console.log("This much health was taken from you: " + hHealthDeduction);

                humanHealth = humanHealth - hHealthDeduction;
                zombieHealth = zombieHealth;
                zombieRoll(humanHealth, zombieHealth);
            }

        })

    }

}

zombieRoll(70, 15);