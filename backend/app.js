var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const exphbs = require('express-handlebars');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var providerRouter = require('./routes/providers');
var apiRouter = require('./api/routes/main.routes');

const db = require('./api/db/db');
var app = express();
app.use(express.json());


app.use(cors({
  origin: "http://localhost:4200",
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true
}));

app.options("*", cors());

app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layout'),
  partialsDir: [
    path.join(__dirname, "views/components"),
    path.join(__dirname, "views/components/link"),
    path.join(__dirname, "views/partials"),
    path.join(__dirname, "views/partials/section"),
    path.join(__dirname, "views/providers"),
  ],
  helpers: {
    ifEquals: function (a, b, options) {
      return (a === b) ? options.fn(this) : options.inverse(this);
    },
    ifContains: function (a, b, options) {
      if (!a) return options.inverse(this);   // aman
      return a.includes(b) ? options.fn(this) : options.inverse(this);
    },
    ifNotEquals: function (a, b, options) {
      return (a !== b) ? options.fn(this) : options.inverse(this);
    },
    concat: function () {
      let outStr = '';
      for (let i = 0; i < arguments.length - 1; i++) { // skip options object
        outStr += arguments[i];
      }
      return outStr;
    },
  }

}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  res.locals.currentRoute = req.path;
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/providers', providerRouter);
app.use('/api', apiRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // Jika API request → balikan JSON
  if (req.originalUrl.startsWith('/api/providers')) {
    return res.status(err.status || 500).json({
      success: false,
      message: err.message,
      error: err
    });
  }

});


module.exports = app;
