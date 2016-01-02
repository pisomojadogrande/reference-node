const express = require('express');
const router = express.Router();
const containerInfo = require('./container_info');

const VERSION_NUMBER = '0.0';
const BUILD_NUMBER = '1';
function makeVer() {
    return VERSION_NUMBER + '.' + BUILD_NUMBER;
}


router.get('/', function(req, res) {
  const response = containerInfo.greetingString +
    "; you asked for " + JSON.stringify(req.query);
  res.send(response);
});

router.get('/version', function(req, res) {
  const response = containerInfo.greetingString +
    "; version is " + makeVer();
  res.send(response);
});


module.exports = router;