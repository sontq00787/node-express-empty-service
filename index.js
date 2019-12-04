require('dotenv').config();
var express = require('express');
var app = express();
var router = require('./routers/router')
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

//FIXME: just for testing
app.get('/', (req, res) => {
    res.send("Finhay KYC Service")
})
//

app.use(router)

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept, Authorization");
    next();
});

console.log("KYC Service run on localhost:" + process.env.PORT || 3002)

app.listen(process.env.PORT || 3002);