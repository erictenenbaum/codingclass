const http = require('http');

const PORT = 8080;

const PORT2 = 7070;

const handleRequest = function(req, res) {
    res.end("This works" + req.url);
}

const handleRequest2 = function(req, res) {
    res.end("This also works" + req.url);
}

    


const server = http.createServer(handleRequest);

server.listen(PORT,  ()=> 
console.log("server is listening on: " + PORT));



const server2 = http.createServer(handleRequest2);

server2.listen(PORT2,  ()=> 
console.log("server is listening on: " + PORT2));




// server.listen(PORT2, ()=> 
// console.log("server is listening on: " + PORT2));
