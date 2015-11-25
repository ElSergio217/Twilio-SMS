var express = require('express'),
	app = express(),
	server = require('http').createServer(app);
var port = Number(process.env.PORT || 3000)
server.listen(port);

var client = require('twilio')('SID', 'Token');


app.get('/', function (req, res) {
    client.sendMessage({
        to: '+1**********',
        from: '+1**********',
        body: '(TEST) Hello World'
    }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
});