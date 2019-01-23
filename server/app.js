var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var taskModel = require('./models/task')
var cors = require('cors')

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

mongoose.connect('mongodb://goofy:Acube1997@ds141671.mlab.com:41671/milestone', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);


//task routes
app.post('/task/new', (req, res) => {
  var task = new taskModel({
    name:req.body.task
  })
  task.save()
  .then((data) => {
    res.send(data)
  })
  .catch(err => {
    console.log(err)
  })
  console.log(req.body)
})

app.get('/tasks', (req, res) => {
  taskModel.find({}, function(err, result){
    if(err){
      console.log(err)
    }
    else{
      console.log((result[0]))
      res.send(result[0])
    }
  })
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
