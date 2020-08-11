var express = require('express');
var router = express.Router();


//data retrieval
//store variable

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title:"This is the accounts page", name:"NAMAM" });
});

module.exports = router;
