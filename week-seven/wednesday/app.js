console.log("hello");

console.log(new Date());

var config = {
    apiKey: "AIzaSyBkYYhbLjC2B35-GN31y82S6AhK3lB4u18",
    authDomain: "employeebillrate.firebaseapp.com",
    databaseURL: "https://employeebillrate.firebaseio.com",
    projectId: "employeebillrate",
    storageBucket: "employeebillrate.appspot.com",
    messagingSenderId: "212636301575"
  };
  
  firebase.initializeApp(config);

var database = firebase.database();
var name;
var startDate;
var rate;
var role;
var num = 2;
var mWorked;
var totalBilled;



database.ref().on("child_added", function(snapshot, preChildKey) {
	console.log(snapshot);
	console.log(snapshot.val());

	var newPost = snapshot.val();

	var a = moment(newPost.startDate);
	var b = new Date();

	var c = a.diff(b, "days");
	
	mWorked = Math.floor(-c / 30);
	totalBilled = mWorked * newPost.rate;



	// console.log(d);

	// mWorked = newPost.startDate.diff().(moment(), 'months');

	console.log(mWorked);

	console.log(newPost.name);
	console.log(newPost.startDate);
	console.log(newPost.role);
	console.log(newPost.rate);

	

	// $("#Role").append($("<td>" + newPost.role "</td>" ));
	// $("#sDate").append($("<td>" + newPost.startDate));
	// $("#mRate").append($("<td>" + newPost.rate));
	// $("#Name").append($("<td>" + newPost.name));

	$('#myTable').last().append($("<tr>" + "<td>" + num++ + "</td>" +
											 "<td>" + newPost.name + "</td>" + 
											"<td>" + newPost.role + "</td>" +
											"<td>" + newPost.startDate + "</td>" +
											"<td>" + mWorked + "</td>" +
											"<td>" + newPost.rate + "</td>" + 
											"<td>" + '$' + totalBilled + "</td>" + 
									"</tr>"));




});


$("#submit-buton").on("click", function() {

 	name = $("#nameInput").val().trim();
 	startDate = $("#startInput").val().trim();
 	rate = $("#monthlyInput").val().trim();
	role = $("#roleInput").val().trim();

	console.log(name, startDate, rate, role);


	database.ref().push({
		name: name,
		startDate: startDate,
		rate: rate,
		role: role
	});	

	$("#Name").text(name);
	$("#Role").text(role);
	$("#sDate").text(startDate);
	$("mRate").text(rate);



} )