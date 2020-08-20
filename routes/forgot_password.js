require("firebase/auth");
require("firebase/firestore");

var express = require('express');
var router = express.Router();

var firebase = require('firebase/app');

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

function sendResetEmail() {
    var auth = firebase.auth();
    var emailAddress = "user@example.com";

    auth.sendPasswordResetEmail(emailAddress).then(function() {
        // Email sent.
    }).catch(function(error) {
        // An error happened.
    });
}