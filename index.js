const express = require('express');
const app = express();
const containerInfo = require('./container_info');

const port = 3000;

console.log("Container id " + containerInfo.containerId);
app.containerId = containerInfo.containerId;

app.get('/', function(req, res) {
  res.send("Hello from container " + app.containerId);
});

var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

