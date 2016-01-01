const http = require('http');

const port = 3000;

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, function() {
  //console.log(JSON.stringify(process.env, null, 2));
  console.log("Server running on port " + port);
});
