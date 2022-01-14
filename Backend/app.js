const express = require('express');
var cors = require('cors')
var app = express();
var createError = require('http-errors');
var path = require('path');
var bodyParser = require('body-parser');
const http = require('http');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var emailRouter = require('./routes/emailRouter');
var emailRouter2 = require('./routes/emailRouter2');
var emailRouter3 = require('./routes/emailRouter3');
var emailRouter4 = require('./routes/emailRouter4');

app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/email', emailRouter);
app.use('/email2', emailRouter2);
app.use('/email3', emailRouter3);
app.use('/email4', emailRouter4);
app.use(cors());


app.disable('etag');
require('./config/express')(app);
require('./config/routes')(app);

module.exports = app;