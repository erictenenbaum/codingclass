// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

 var config = {
    apiKey: "AIzaSyA3ORJ4Jc__BhVlA8bKkAOY1dQBKM1oiTs",
    authDomain: "codersbay-21024.firebaseapp.com",
    databaseURL: "https://codersbay-21024.firebaseio.com",
    projectId: "codersbay-21024",
    storageBucket: "codersbay-21024.appspot.com",
    messagingSenderId: "792569459630"
  };
  firebase.initializeApp(config);


// Assign the reference to the database to a variable named 'database'
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = parseInt(snapshot.val().highPrice);
    highBidder = snapshot.val().highBidder;


    // Change the HTML to reflect the stored values
    $("#highest-bidder").html(highBidder);
    $("#highest-price").html(highPrice);

    // Print the data to the console.
    console.log("highest bidder is: " + highBidder);
    console.log("highest bid is: " + highPrice);


  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-bidder").html(initialBidder);
    $("#highest-price").html(initialBid);

    // Print the data to the console.
    console.log("highest bidder is: " + initialBidder);
    console.log("highest bid is: " + initialBid);

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
    var bidderPrice = parseInt($("#bidder-price").val().trim());
    var bidderName = $("#bidder-name").val().trim();
    
    console.log("most recent bidder: " + bidderName);
    console.log("most recent bid: " + bidderPrice);

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    
    database.ref().set({
        highBidder: bidderName,
        highPrice: bidderPrice
    });


    // Log the new High Price
    
    console.log("we have a new high bidder: " + bidderName);
    console.log("we have a new high bid: " + bidderPrice);


    // Store the new high price and bidder name as a local variable
    
    highPrice = parseInt(bidderPrice);
    highBidder = bidderName;


    // Change the HTML to reflect the new high price and bidder
    
     $("#highest-bidder").html(highBidder);
    $("#highest-price").html(highPrice);

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});