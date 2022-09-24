// Dependencies
var Promise = require('promise');
var config = require('./config');
var routes = require('./../routes/routes');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var initApp = function() {
  // Init
  var app = express();

  // Config
  app.set('port', config.PORT);

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());
  app.use(morgan('short'));

  app.set('views', './views');
  app.set('view engine', 'jade');
  app.use(express.static('./public'));

  // Setup routes
  routes(app);

  return app;
};

module.exports = initApp;