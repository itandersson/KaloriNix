'use strict';
require('dotenv').config();
var debug = require('debug')('my express app');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var calculate_calorie_content = require('./routes/calculate_calorie_content');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/calculate_calorie_content', calculate_calorie_content);

//console.log(process.env) // remove this after you've confirmed it working

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
