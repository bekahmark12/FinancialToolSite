require("firebase/auth");
require("firebase/firestore");

var express = require('express');
var router = express.Router();
var firebase = require('firebase/app');
const jwtHelper = require('./jwtHelper');

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

//
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
    console.log("email: " + email);
    console.log("Logged IN");
  } else {
    // User is signed out.
    // ...
  }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '360 Financial Tools' });
  jwtHelper.timeMethod();

  /*firebase.auth().signInWithEmailAndPassword("test@gmail.com", "123").catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });*/

 /* firebase.auth().createUserWithEmailAndPassword("email@.com", "12345678").catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode == null) {
      console.log("Signed up");
    }else{
      console.log(errorMessage);
    }
  });*/


});

module.exports = router;

