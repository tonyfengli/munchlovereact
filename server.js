const express = require('express');

// Password auth stuffs
var passport = require("passport");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;
// Middleware
app.use(express.static("views/images"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// passport password auth stuff
app.use(
  session({
    secret: "goN6DJJC6E287cC77kkdYuNuAyWnz7Q3iZj8",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

const env = require('dotenv').load();

//Models
const db = require("./app/models");

// routes
const authRoute = require("./app/routes/auth.js")(app, passport);
require("./app/routes/apiRoutes.js")(app, db.Userfavorite);

//for userfavorites
require("./app/routes/apiRoutes.js")(app, db.Userfavorite);

//load passport strategies
require("./config/passport.js")(passport, db.Userinfo);
 
//Sync Database
db.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);