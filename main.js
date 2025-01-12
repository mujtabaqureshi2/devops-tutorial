// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello getintodevops.com\n");
});

const port = 8000;
const host = '0.0.0.0';

server.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}/`);
});
