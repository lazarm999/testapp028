var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	res.send('Thank you!');
});

app.use('/:s', function (req, res, next) {
	res.send(req.params.s);
});

console.log("Poceo je da slusa!!!");

app.listen(port);
