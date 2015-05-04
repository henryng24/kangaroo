var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(express.static(__dirname + '/client'));

require('./server/routes.js')(app);

app.listen(8080, function() {
  console.log("Listening on port 8080");
});

exports = module.exports = app;