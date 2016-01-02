const express = require('express');
const app = express();
const exec = require('child_process');

const port = 3000;

const getMyContainerIdCommand = 'cat /proc/self/cgroup | grep docker | tail -n 1'
const commandOutput = exec.execSync(getMyContainerIdCommand, {encoding: 'utf8'}) || "1:blkio:/docker/UNKNOWN\n";
const containerId = commandOutput.replace(/^.*docker\//, "").trim();

app.containerId = containerId;

app.get('/', function(req, res) {
  res.send("Hello from container " + containerId);
});

var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

