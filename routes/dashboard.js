var express = require("express")
var router = express.Router();

router.get("/", function(req, res, next){
    res.render("dashboard", { displayName: req.session.displayName});
    console.log("Getting dashboard.....")
    console.log(req.body.user)
});


module.exports = router;