var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.get('/teste', function (req, res) {
    res.send('Teste: 1');
});
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/teste/user', function (req, res) {
    var token = req.param('token');
    res.send(token);
});
app.listen(port, function () {
    console.log('Server started! At http://localhost:' + port);
});
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/teste/user', function (req, res) {
    var token = req.body.token;
    res.send(token);
});
