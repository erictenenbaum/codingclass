// In this activity we are going to make two constructors in two different files in 
// which one constructor calls upon the other within it.

// The first constructor function is called "Student" and has the following properties within it...

// Name of the student
// Favorite subject
// Current GPA
// The second constructor function is called "Class" and has the following properties within it...

// An array of students within the class
// Number of students in the class
// Name of the professor
// Room number
// The Student constructor function from above which adds a new student to the class
const Student = require("./student.js");

console.log("Class hooked in");

function Class(professorName, roomNum) {

	this.students = [];
	this.professorName = professorName;
	this.roomNum = roomNum;
	this.addStudent = function(x, y, z) {
		 this.students.push(new Student (x, y, z) );
	}
	this.studentCount = function () {
		return this.studentArray.length;
	}

}
// BONUS: Make it so that that your application can take in user input to add new classes and new students to those classes.

module.exports = Class




	