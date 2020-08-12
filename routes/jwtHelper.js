class MyStaticClass {

    static timeMethod () {
        var currentTime =  Math.floor(Date.now() / 1000);
        var expTime = currentTime + 1800;
        return [currentTime, expTime ]
    }

}
module.exports = MyStaticClass

const issuerId = "0098bef0-b5ec9eae-c9a5-4241-8a22-e2a5397a9bf8"
var jwt = require('jsonwebtoken')
var fs = require('fs')
var privateKey = fs.readFileSync('./files/key.pem', 'utf8');
var currentTime = MyStaticClass.timeMethod()
const request = require('request');

var token = jwt.sign({ iss: issuerId, sub: 'sbMemfcIVWnzoVXXDf2', iat: currentTime[0], exp: currentTime[1] }, privateKey, { algorithm: 'RS512' }, function(err, token) {
    console.log(token)

    const options = {
        url: "https://sandbox.api.yodlee.com/ysl/accounts",
        headers: {
            content_type: 'application/json',
            'Api-version': '1.1',
            authorization: "Bearer " + token
        }
    }

    request(options, function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });

});







