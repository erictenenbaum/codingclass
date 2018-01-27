const http = require('http');

const PORT = 8080;

const handleRequest = function(req, res) {
    res.end("Hey, it works!" + req.url);
}

    


const server = http.createServer(handleRequest);

server.listen(PORT, ()=> 
console.log("server is listening on: " + PORT));