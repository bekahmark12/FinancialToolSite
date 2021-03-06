
require("firebase/auth");
require("firebase/firestore");

const express = require('express');
const firebase = require('firebase/app');

const router = express.Router();
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded());

var firebaseConfig = {
    apiKey: "AIzaSyAk6r7AyBonnTaipxxCBUQ0ZNia2GRYm30",
    authDomain: "financial-360.firebaseapp.com",
    databaseURL: "https://financial-360.firebaseio.com/",
    projectId: "financial-360",
    storageBucket: "financial-360.appspot.com",
    messagingSenderId: "453392617493",
    appId: "1:453392617493:web:860f12c221970ea4af7e1c",
    measurementId: "G-701H03H9X7"
};

firebase.initializeApp(firebaseConfig);

router.get('/', function(req, res, next){
    console.log("get method")
    res.render('login_screen', {message:""})

});

router.post('/', function (req,res){

    console.log("login post method:")
    const email = req.body.email
    const password = req.body.password

    if (email && password) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (successful){

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