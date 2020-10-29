var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

// ---- Views/Template Direction ---------
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// ---- Sets Body-Parser ---------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')))

// ---- Routes -------
app.get('/', function(req, res){
    res.render('index')
})

app.listen(3000);
console.log('Server run on Port 3000');