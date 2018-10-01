var exports = (module.exports = {});
var db = require("../models");
const yelp = require('yelp-fusion');
var apiKey = '81fLxhTR0I7D6azLHNAUlu88BxvFgonIl8rD-oguXUftxtdkI5DjI0AB8SEQ1w2uG3N5WobKaHuyY-Hng_jhLPFHYeuptXgzycy2gEbJxg-V_TU8wJ4A35ASpsWVW3Yx';

exports.signup = function(req, res) {
  console.log(req.body);
  res.json(req.body);
  //res.render("signup");
};
exports.error = function(req, res) {
  res.json("lol");
};
exports.login = function(req, res) {
  console.log("lol");
  //res.render("login");
};

exports.searchresults = function(req, res) {
  console.log("lol1");
  const location = req.params.location;

  // Place holder for Yelp Fusion's API Key. Grab them
  // from https://www.yelp.com/developers/v3/manage_app
  const apiKey = '81fLxhTR0I7D6azLHNAUlu88BxvFgonIl8rD-oguXUftxtdkI5DjI0AB8SEQ1w2uG3N5WobKaHuyY-Hng_jhLPFHYeuptXgzycy2gEbJxg-V_TU8wJ4A35ASpsWVW3Yx';

  const searchRequest = {
    term:'coffee',
    location: location
  };

  const client = yelp.client(apiKey);

  client.search(searchRequest).then(response => {

    var businesses = [];

    //console.log(businesses)
      
    response.jsonBody.businesses.forEach(business => {
      var dataObject = {
        id: business.id,
        name: business.name,
        rating: business.rating,
        phone: business.phone,
        image: business.image_url,
        price: business.price
      }  
        businesses.push(dataObject);
    });

    //console.log(businesses);

    //const prettyJson = JSON.stringify(firstResult, null, 4);
    res.json(businesses);

    

  }).catch(e => {
    console.log(e);
  });
};


exports.profile = function(req, res) {
  // looks at Userfavorite table (in SQL) and queries the 'UserinfoId Column' 
  // it checks for any rows that have User ID of the user currently logged in
  // we have access to "req.user.id" because it is given to us from Passport.js
  db.Userfavorite.findAll({
    where: {
      UserinfoId: req.user.id
    }
  }).then(function(data) {

    // we are setting var favorites like this... because this is the structure that handlebars requires 
    var favorites = { 
      businesses: []
    }

    // keeping in mind that "data" comes from SQL, we iterate over "data" (like a for loop) 
    // and we push the data into the businesses:[] array (from favorites) 

    data.forEach(business => {
      favorites.businesses.push(business.dataValues);
    })

    // with our "new and improved" "data" we give it to handlebars to be rendered
    //res.render("profile", favorites);

  });

  
};


exports.aboutus = function(req, res) {
  res.render("aboutus");
};

// sends userdata to main.handlebars, because we will need it to see who is logged
exports.favorites = function(req, res) {
  res.json(req.user);
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};

exports.frontpage = function(req, res) {
  console.log("HELLLOOOOOO>>>>>>>>>", req.user);
  console.log(req.isAuthenticated());
  res.render("frontpage");
};

exports.front = function(req, res) {
  res.redirect("/frontpage");
};
