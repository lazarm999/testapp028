var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.send('Thank you!');
	next();
});

app.get('/:s', function (req, res) {
	res.send(req.params.s);
});

console.log("Poceo je da slusa!!!");

app.listen(port);
