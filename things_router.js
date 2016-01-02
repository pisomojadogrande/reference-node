const express = require('express');
const router = express.Router();
const containerInfo = require('./container_info');

router.get('/:name', function(req, res) {
  const response = "Hello from container " + containerInfo.containerId +
    "; you asked for params " + JSON.stringify(req.params) +
    " query " + JSON.stringify(req.query);
  res.send(response);
});

router.post('/new', function(req, res) {
  const response = "Hello from container " + containerInfo.containerId +
    "; you tried to create something new: " + JSON.stringify(req.query);
  res.send(response);
});

module.exports = router;