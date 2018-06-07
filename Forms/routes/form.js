const express = require('express');
const router = express.Router();

// Get home page
router.get('/', function (req, res, next) {
  //res.send('Hello World!');
  res.render('form', null); // NULL's object with variables could be passed to view by view-engine
});

// GET localhot:PORT/form/submit
router.get('/submit', function (req, res, next) {
  res.send('You will get a response soon for email address, thank you for using our service!');
});

module.exports = router;
