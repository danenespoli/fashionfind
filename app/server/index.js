const express = require('express');
const app = express();
const server = app.listen(8000);
const path = require('path');

// Middleware.
app.use(require('morgan')('combined'));
app.use(require('compression')());
app.use(express.static('./app/static'));

// Global

// Routes.
app.use(require('./routes')(app));
