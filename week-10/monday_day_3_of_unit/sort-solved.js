const input = process.argv;

const output = [];

for (let i = 2; i < input.length; i++) {
	output.push(parseFloat(input[i]));

}

// const sorter = (a, b) => return a-b;

const sorter = function(a,b) {
	return a-b;
}

console.log(output.sort(sorter));

