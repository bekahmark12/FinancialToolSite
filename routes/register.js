var express = require("express")
var router = express.Router();

router.get("/", function(req, res, next){
    console.log("Getting register screen.....")
    res.render('register')

});

router.post('/', function (req,res){

    console.log("register post method:")
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    if (email && password && name) {
        firebase.auth().createUserWithEmailAndPassword("email@.com", "12345678").then(function (successful){

            if (successful.user){
                console.log("Log in successful")
                //use express session
                req.app.set("user",successful.user)
                req.app.set("displayName",successful.user.displayName)
                res.redirect('/dashboard')
            }

        })
            //Login error handling
            .catch(function (error){
                let message = "";
                switch (error.code){
                    case "auth/wrong-password":
                        message = "Invalid password"
                        break
                    case "auth/invalid-email":
                        message = "Invalid email"
                        break
                    case "user-not-found":
                        message = "User not found"
                        break
                    default:
                        break
                }
                //Re-render login page with the error message
                res.render('login_screen',{message:message})
                console.log(error.message)
            })

    }
});


module.exports = router;