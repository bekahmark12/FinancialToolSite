require('dotenv').config()
// const issuerId = process.env.ISSUER_ID;
var jwt = require('jsonwebtoken')
var fs = require('fs')
// var privateKey = fs.readFileSync('./files/key.pem', 'utf8');
const request = require('request');


class apiHelper{
    static timeMethod () {
        var currentTime =  Math.floor(Date.now() / 1000);
        var expTime = currentTime + 1800;
        return [currentTime, expTime ]
    }

    static getToken = function() {
        var currentTime = apiHelper.timeMethod()
        return jwt.sign({ iss: process.env.ISSUER_ID, sub: 'sbMemfcIVWnzoVXXDf2', iat: currentTime[0], exp: currentTime[1] }, process.env.API_KEY, { algorithm: 'RS512' })
    }

    static getAccountData = function(data) {
        const options = {
            url: "https://sandbox.api.yodlee.com/ysl/accounts/",
            headers: {
                content_type: 'application/json',
                'Api-version': '1.1',
                authorization: "Bearer " + apiHelper.getToken()
            }
        }

        request(options,function (error, response, body) {
            // console.error('error:', error); // Print the error if one occurred
            // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            // console.log('body:', body); // Print the HTML for the Google homepage.
            return data(body);
        });

    }

    static getTransactionData = function() {
        const options = {
            url: "https://sandbox.api.yodlee.com/ysl/transactions/",
            headers: {
                content_type: 'application/json',
                'Api-version': '1.1',
                authorization: "Bearer " + apiHelper.getToken()
            }
        }

        request(options,function (error, response, body) {
            // console.error('error:', error); // Print the error if one occurred
            // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            // console.log('body:', body); // Print the HTML for the Google homepage.
            return body
        });
    }


}



module.exports = apiHelper