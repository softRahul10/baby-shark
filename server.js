const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
const userslist = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { pageName: 'Home page', path: '/' });
})
app.get('/users', (req, res) => {
    res.render('user', { pageName: 'Users', path: '/users', users: userslist });
})
app.post('/users', (req, res) => {
    userslist.push(req.body.username);
    res.redirect('/users');
})

app.use((req, res) => {
    res.status(404);
    res.render('404',{ pageName: 'Not Found' , path: req.url});
})

app.listen(3000, () => {
    console.log('Express server listening');
});