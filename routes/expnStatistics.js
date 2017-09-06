var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('[expnList] respond with a resource');
  res.render('expnStatistics', { title: 'itmExpn' , userName: '김다정'});
});

module.exports = router;
