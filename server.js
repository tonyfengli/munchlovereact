const express = require('express');

const app = express();

const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

const env = require('dotenv').load();

//Models
const db = require("./app/models");

// routes
const authRoute = require("./app/routes/auth.js")(app, passport);

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