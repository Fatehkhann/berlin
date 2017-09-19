const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const morgan = require('morgan');
const cors = require('cors');

// // Require Middleware Function 
// const authentication = require('./middleware/auth_middleware');

const app = express();
app.use(express.static(__dirname + '/public'));
// Parse body coming along with req
app.use(bodyParser.json());

// To log all the incoming requests to server
app.use(morgan('► :method :url :status :res[content-length] - :response-time ms')); 

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})




routes(app);

app.use((err, req, res, next) => {
    res.status(422).send('【E】Error:' + err);
})

module.exports = app;