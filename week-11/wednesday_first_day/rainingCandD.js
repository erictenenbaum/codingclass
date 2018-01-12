// nstructions

// Make a dogs object with three keys...

// First key called "raining" with a value of true

// Second key called "noise" with a value of "Woof!"

// Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs

var dogs = {
	raining: true,
	noise: "Woof!",
	makeNoise: function (raining) {
		if (raining) {
			console.log(dogs.noise);
		}
	}
}

// Make a cats object with three keys...

// First key called "raining" with a value of false

// Second key called "noise" with a value of "Meow!"

// Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats

var cats = {
	raining: false,
	noise: "Meow!",
	makeNoise: function (raining) {
		if (raining) {
			console.log(cats.noise);
		}
	}
}

// Make the dog bark

dogs.makeNoise(dogs.raining);

// Make the cat meow

cats.makeNoise(dogs.raining);

// BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the raining keys are equal to true.
// function massHysteria (dogs, cats) {
// 	if(dog.raining) {
// 		console.log("DOGS AND CATS LIVING ....")
// 	}
// };

const massHysteria = (dogs, cats) => {
	if (dogs.raining && cats.raining === false) {
		console.log("DOGS AND CATS LIVING...")
	}
}

massHysteria(dogs.raining);

// massHysteria(dogs.makeNoise(dogs.raining), cats.makeNoise(dogs.raining));

// massHysteria();

// BONUS: Look to see if you can find any means to simplify your code further and further