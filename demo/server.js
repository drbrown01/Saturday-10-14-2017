var http = require("http");

var port = 8080; //port is umprivelidge, doesnt' require root access to run

function handleRequest(request, response) {
  response.end("It works"+ request.url);
};

// server side stuff goes here.
var server = http.createServer(handleRequest);

server.listen(port, function() {
  console.log("we are listening" + port);
});
