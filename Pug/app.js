//console.log('Hi World!');

// Require libs
const express = require('express');
const path = require('path');

const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Routes

// GET : HOME PAGE
app.get('/', function(req, res) {
  res.render('index', {
    title: 'The home page'
  });
  //res.send('Hello World');
});

// GET : Articles
app.get('/articles/add', function(req, res) {
  res.render('add_article', {
    title: 'Articles'
  });
  //res.send('Hello World');
});

// Start Server
app.listen(3000, function() {
  console.log('Server started on port 3000...');
});
