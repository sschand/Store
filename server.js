// Required modules
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// use/set
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client")));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// Server stuff
app.listen(8002, function(){
    console.log('Mini MEAN Storesss listening on port 8002');
});
