

var express = require('express');
var router = express.Router();
let apiHelper;
apiHelper = require('./apiHelper.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '360 Financial Tools' });

  apiHelper.getAccountData()
});

module.exports = router;

