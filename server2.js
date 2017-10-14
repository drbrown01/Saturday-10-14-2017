var http = require("http");

var port = 7000; //port is umprivelidge, doesnt' require root access to run
var listenPort = 7500

function handleRequest(port, request, response) {
  if (port === 7000) {
  response.end("It works"+ request.url);
  }
  response.end("Nice stuff"+ port)
};

// server side stuff goes here.
var server = http.createServer(handleRequest);

server.listen(port, function() {
  console.log("we are listening" + port);
});
