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

app.get('/about', function(req, res){
    res.render('about')
})

app.get('/contact', function(req, res){
    res.render('contact')
})

app.post('/contact/send', function(req, res){
    var transporter = nodemailer.createTransporter({
        service: 'Gmail',
        auth: {
            user: ' ',
            pass: 'password'
        }
    })

    var mailOptions = {
        from: 'Ralph Romero',
        to: '',
        subject: 'Website Submission',
        text: 'You have a submission with the following details... Name: ' + req.body.name + 'Email: ' + req.body.email + ' Message: ' + req.body.message,
        html: '<p>You have a submission with the following details...</p><ul><li>Name: ' + req.body.name +'</li><li>Email: ' + req.body.email +'</li><li>Message: ' + req.body.message +'</li></ul>'
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error)
            res.redirect('/')
        }
        else{
            console.log('Message sent: ' + info.response)
            res.redirect('/')
        }
    })
    
})

app.listen(3000);
console.log('Server run on Port 3000');