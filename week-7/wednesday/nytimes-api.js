console.log("hello");

$("#add-movie").on("click", function(event) {

  
var searchResult = $("#PLACEHOLDER").val().trim();

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "52c7c626490b41e0bd1a97b6f211aaf1",
  // did searchResult return a string?
  'q': searchResult,
  'begin_date': "20171101"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});



        event.preventDefault();

        // This line grabs the input from the textbox
        // var movie = $("#movie-input").val().trim();

        // The movie from the textbox is then added to our array
        // movies.push(movie);

        // Calling renderButtons which handles the processing of our movie array
        // renderButtons();

      });
