const heroesRouter = require('./routes/heroes');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var providerStateRouter = require('./routes/provider_state');

if (process.env.PACT_MODE === 'true') {
    app.use('/provider-state', providerStateRouter);
}

app.use('/heroes', heroesRouter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

console.log("Listening at http://localhost:" + (process.env.PORT || 3000)); 

module.exports = app;

