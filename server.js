const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.get('/',(req, res) => {
    res.render('index');
})

app.listen(3000, () => {
    console.log('Express server listening');
});