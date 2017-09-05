var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('[expnList] respond with a resource');
  res.render('expnList', { title: 'itmExpn' });
});

module.exports = router;
