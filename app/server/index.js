var express = require('express');
var app     = express();
var server  = app.listen(8000);
var path    = require('path');

// Middleware.
app.use(require('morgan')('combined'));
app.use(require('compression')());
app.use(express.static('./app/static'));

// Global

// Routes.
app.use(require('./routes')(app));
