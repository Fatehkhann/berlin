var request = require('request');

module.exports = (app) => {

    var API_KEY = 'AIzaSyCqzLJPg70Gq7QZe3gw3lI0IPwSPB2ytg0';

    //Welcome Get Request
    app.get('/api', (req, res, next) => {
    request({
        url: `https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&gscoord=37.786971%7C-122.399677&format=json`,
        json: true
    },
        (error, response, body) => {
            if (!error && response.statusCode === 200) {
                res.send(body);
                next();
            }
            else {
                res.send('Unable to process the request');
                next();
            }
        });
    })


    //get photo Request
    app.get('/getHeaderPhoto', (req, res, next) => {
    request({
        url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.query.placeId}&key=${API_KEY}`,
        json: true
    },
        (error, response, body) => {
            if (!error && response.statusCode === 200) {
                res.send(body);
                next();
            }
            else {
                res.send('Unable to process the request');
                next();
            }
        });
    })

    //get places Request
    app.get('/getPlaces', (req, res, next) => {
    request({
        url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.lat},${req.query.lng}&radius=500&type=restaurant,museum,airport,cafe,zoo&key=${API_KEY}`,
        json: true
    },
        (error, response, body) => {
            if (!error && response.statusCode === 200) {
                res.send(body);
                next();
            }
            else {
                res.send('Unable to process the request');
                next();
            }
        });
    })
}