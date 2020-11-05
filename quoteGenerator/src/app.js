const path = require('path');
const express = require('express');
const app = express();

const directoryPath = path.join(__dirname, '../public');

app.use(express.static(directoryPath));

app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.render('index');
})

app.listen(3000, () => {
    console.log('Running on port 3000')
})