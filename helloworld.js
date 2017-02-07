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
