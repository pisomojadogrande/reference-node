const http = require('http');
const exec = require('child_process');

const port = 3000;

const getMyContainerIdCommand = 'cat /proc/self/cgroup'
const containerId = exec.execSync(getMyContainerIdCommand, {encoding: 'utf8'}) || 'unknown';
console.log("Container id " + containerId);

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("Hello from container " + containerId);
}).listen(port, function() {
  //console.log(JSON.stringify(process.env, null, 2));
  console.log("Server running on port " + port);
});
