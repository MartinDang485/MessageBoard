const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Middleware for static files (imgs, css)
app.use(express.static('public'));

//Set new view engine
app.set('view engine', 'ejs');

//Next response to move onto routers
app.use((req,res,next) => {
    next();
    console.log('New Request Made');
})

app.listen(3000);

//set routers
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/create', (req,res) => {
    res.render('create');
});

app.use((req, res) => {
    res.status(404).render('404');
});
