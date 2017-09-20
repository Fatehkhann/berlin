const http = require('http');

const app = require('./app');

var server = http.createServer(app);
var port = process.env.PORT || 3000;

///////////////////////
// Start Express App
server.listen(port, () =>{
    console.log('✓ API started on localhost port 3000');
});