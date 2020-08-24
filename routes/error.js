var express = require("express")
var router = express.Router();

router.get("/", function(req, res, next){
    console.log("Getting error.....")
    const message = res.app.get("error-message")
    res.render("error", { error: message});

});


module.exports = router;