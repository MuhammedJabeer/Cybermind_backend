var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var jobRouter = require('./routes/job');
const cors=require('cors')
// var usersRouter = require('./routes/users');
require('dotenv').config()
var app = express();
// const supabase=require('./connect/db')
// supabase()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', jobRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(cors({
  origin: 'https://cybermind-frontend-9m53.onrender.com', // Replace with your frontend URL
  credentials: true
}));


const port=process.env.PORT

app.listen(port,()=>{
  console.log(`server start at ${port}`)
})

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
