var http = require("http");

var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on port: " + PORT);
});

function handleRequest (req, res) {
    var path = req.url;

    switch(path) {
        case "/foods":
         case "/movies":
          case "/frameworks":
        return renderHTML(path + ".html", res);

        default:
        return renderHTML("/index.html", res);
    }
}


function renderHTML(filePath, res) {

    fs.readFile(__dirname + filePath, function(err, data){
        res.writeHead(200, {"content": "text/HTML"})

        res.end(data);
    })

}