var express= require('express');
var fs = require('fs');
var app = express();
var qt = require('quickthumb');

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/.tmp'));
/** Config pour QuitchThumb :
 * Cree une nouvelle route pour acceder au images
 * genere par imagemagick sur /preview
 */
app.configure(function(){
	app.use('/preview', qt.static(__dirname + '/app/images', {type: 'resize'}));
});
app.get('/', function (req, res) {
		res.sendfile('app/index.html');
});

app.get('/api/:year', function(req, res) {
	console.log(req.params.year);
	var directory = fs.readdirSync('app/images/'+req.params.year);
	console.log (directory);
	res.json(directory);
});
app.listen('9000', function () {
console.log("ready to work");
});
