var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// import ejs layout
const expressLayouts = require('express-ejs-layouts');

// import todo model
const { Todos } = require("./models");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Layout EJS
app.use(expressLayouts);
app.set('layout', 'layouts/default');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// START CODE HERE
app.get('/api/articles', async (_, res) => {
  const todos = await Todos.findAll();
  res.json(todos);
});

app.get('/home', async (req, res) => {
  const title = "Halo saya student binar.",
    subTitle = "Halo Selamat Berpuasa !";

  const todos = await Todos.findAll({
    where: {
      isDone: true,
    },
  });

  res.render('home', {
    judul: title,
    deskripsi: subTitle,
    todos,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});
// END CODE HERE

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
