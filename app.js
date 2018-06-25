var express = require('express');
var app = express();
var path = require("path");

var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/public/views'));

app.get('/', function(req, res) {
	//res.sendFile(path.join(__dirname +'/views/index.html'));
	res.render('index');
});

app.get('/:s', function (req, res) {
	res.send(req.params.s);
});

console.log("Poceo je da slusa!!!");

app.listen(port);
