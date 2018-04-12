var express = require('express');
var app = express();
var mongoose = require('mongoose');
//will take you to the config folder which will direct you to index.js (bc package.json file?)
var config = require('./config');
var apiController = require('./controllers/apiController');


var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
apiController(app);

app.listen(port);