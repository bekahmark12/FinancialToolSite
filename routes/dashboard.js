var express = require("express")
var router = express.Router();

router.get("/", function(req, res, next){
    res.render("dashboard", { displayName: req.session.displayName});
    //res.render("dashboard");
    console.log("Getting dashboard.....")

    const user = res.app.get("user")

    if (user){
        res.render("dashboard", { displayName: res.app.get("displayName")});

    }else{
        res.app.set("error-message","Unauthorized access. Please log in")
        res.redirect("/error")
    }

});


module.exports = router;