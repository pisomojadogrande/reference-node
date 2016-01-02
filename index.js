const express = require('express');
const app = express();
const rootRouter = require('./root_router');
const thingsRouter = require('./things_router');

const port = 3000;

app.use('/', rootRouter);
app.use('/things', thingsRouter);

var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

