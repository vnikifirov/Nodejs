const express = require('express');
const router = express.Router();

// Get home page
router.get('/', function (req, res, next) {
  res.render('index', null); // NULL's object with variables could be passed to view by view-engine
});

module.exports = router;
