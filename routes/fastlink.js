var express = require("express")
var router = express.Router();
var apiHelper = require("./apiHelper.js")


router.get("/", function(req, res, next){
    var token = apiHelper.getToken()
    res.render("fast_link", { token: token});
    //res.render("dashboard");
    console.log("Getting dashboard.....")


});


module.exports = router;