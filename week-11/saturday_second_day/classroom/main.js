var Classroom = require("./class.js");

var inquirer = require('inquirer');

var firstClass = new Classroom ("Eric", 12);

// firstClass.addStudent("Taylor", "Javascript", 3.9);

console.log(firstClass);

function createStudents(count) {

	if (count < 4) {
		inquirer.prompt([/* Pass your questions in here */
	{
		type: "input",
		message: "What is your name?",
		name: "studentName"
	},
	{
		type: "input",
		message: "What is your favorite subject?",
		name: "subject"
	},
	{
		type: "input",
		message: "What is your GPA?",
		name: "gpa"
	}]).then(answers => {
    // Use user feedback for... whatever!!

    firstClass.addStudent(answers.studentName, answers.subject, answers.gpa);

   console.log(firstClass.students[count]);
    
    count++	// students.push(student);
    createStudents(count);

});



	}
	else {
		console.log(firstClass.students);
	}
	

}

createStudents(0);


