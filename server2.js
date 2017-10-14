var http = require("http");

var port = 7000; //port is umprivelidge, doesnt' require root access to run
var port2 = 7500;

function handleRequest(request, response) {
  response.end("good stuff"+ port)
};
function handleRequest2(request, response) {
  response.end("bad stuff"+ port2)
};

// server side stuff goes here.
var server = http.createServer(handleRequest);
server.listen(port, function() {
  console.log("we are listening" + port);
});
var server2 = http.createServer(handleRequest2)

server.listen(port2, function() {
  console.log("we are listening" + port2);
});
