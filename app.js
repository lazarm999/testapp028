var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	res.send('Thank you!');
});

console.log("Poceo je da slusa!!!");

app.listen(port);