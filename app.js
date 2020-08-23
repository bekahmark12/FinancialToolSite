/** IMPORTS */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

//Debugging logger
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/** ROUTES */
//Home routes
var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var errorRouter = require('./routes/error');

// Login and register
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');

// App routes
var accountsRouter = require('./routes/accounts');
var dashboardRouter = require('./routes/dashboard');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Set the path redirection
app.use('/', indexRouter);
app.use('/accounts', accountsRouter);
app.use('/login', loginRouter)
app.use('/team', aboutRouter);
app.use('/dashboard',dashboardRouter)
app.use('/error',errorRouter)
app.use('/register',registerRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
