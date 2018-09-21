const express = require('express');
const yelp = require('yelp-fusion');

const app = express();


app.get("/", function(req, res) {
  console.log("lol");
});

app.get("/searchresults/:location", function(req, res) {
  console.log("lol");
  var location = req.params.location;

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

    console.log(businesses)
      
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

    console.log(businesses);

    //const prettyJson = JSON.stringify(firstResult, null, 4);
    res.json(businesses);

    

  }).catch(e => {
    console.log(e);
  });

});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);