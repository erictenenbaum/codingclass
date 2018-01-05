// function calculate(a, b, c) {
// 	// if 
// 	if(a == "add") {
// 		return parseInt(b) + parseInt(c);
// 	}
// 	else if(a == "subtract") {
// 		return parseInt(b) - parseInt(c);
// 	}
// 	else if(a == "multiply") {
// 		return (parseInt(b) * parseInt(c));
// 	}
// 	else if(a == "divide") {
// 		return (parseInt(b) / parseInt(c));
// 	}
// 	else if(a == "remainder") {
// 		return (parseInt(b) % parseInt(c));
// 	}
// }

// console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));

function swtichPractice(a) {
switch(a) {
	case "add":
	return parseInt(process.argv[3]) + parseInt(process.argv[4]);
	break;

	case "subtract":
	return parseInt(process.argv[3]) - parseInt(process.argv[4]);
	break;

	case "multiply":
	return parseInt(process.argv[3]) * parseInt(process.argv[4]);
	break;

	case "divide":
	return parseInt(process.argv[3]) / parseInt(process.argv[4]);
	break;

	case "remainder":
	return parseInt(process.argv[3]) % parseInt(process.argv[4]);
	break;

	default:
	return "default case"
}
}

console.log(swtichPractice(process.argv[2]));
