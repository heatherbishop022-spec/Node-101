var http = require("http");
var server = http.createServer(function (request, response) {
console.log(request.url);
response.writeHead(200, { "Content-Type": "text/plain" });
response.end("Hello World");
});
server.listen(8080, function () {
   console.log("Server is listening on port 8080");
});
