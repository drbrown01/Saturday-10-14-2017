var http = require("http");

var port = 80; //port is umprivelidge, doesnt' require root access to run

function handleRequest(request, response) {
  response,end("It works"+ request.url);
}

// server side stuff goes here.
var server = http.createServer(handleRequest);
