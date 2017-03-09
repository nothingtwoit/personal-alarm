var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 4000;
// var SolarCalc = require('solar-calc');
var SunCalc = require('suncalc');

// app.use(function(req, res, next) {
//   console.log(req.method, req.url);
//   next();
// });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



app.post('/data', function(req, res) {
    var localObj = req.body.info;
    var solar =  SunCalc.getTimes(new Date(), localObj.latitude, localObj.longitude);
    console.log(solar.sunrise);

});



app.listen(port, function() {
    console.log("server has started on port 4000");
});
