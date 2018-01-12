function Animal(raining, noise) {
	this.raining = raining,
	this.noise = noise
	this.makeNoise = function () {
		if (this.raining) {
			console.log(this.noise);
		}
	}
}

const dog = new Animal(true, "Woof!");

const cat = new Animal(false, "Meow!");

const bird = new Animal(true, "Tweet!");


dog.makeNoise();

cat.raining = true;
cat.makeNoise();
bird.makeNoise();

console.log(dog);

