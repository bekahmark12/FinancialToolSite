class MyStaticClass {

    static timeMethod () {
        var now = new Date();
        var currentTime = now.getTime()
        now.setMinutes(now.getMinutes() + 30); // timestamp
        now = new Date(now); // Date object
        var expireTime = now.getTime()
        return [currentTime, expireTime ]
    }

}
module.exports = MyStaticClass



var jwt = require('jsonwebtoken')
var fs = require('fs')
var privateKey = fs.readFileSync('./Files/key.pem', 'utf8');
var currentTime = MyStaticClass.timeMethod()
var token = jwt.sign({ iss: '0098bef0-b5ec9eae-c9a5-4241-8a22-e2a5397a9bf8', sub: 'sbMemfcIVWnzoVXXDf4', iat: currentTime[0], exp: currentTime[1] }, privateKey, { algorithm: 'RS512' }, function(err, token) {
    console.log(token)

    const http = require("https")
    const options = {
        hostname: 'sandbox.api.yodlee.com',
        path: '/accounts?',
        headers: {
            Authorization: 'Bearer ' + token, content_type: 'application/json', 'api-version': '1.1'
        }
    }

    let myRequest = http.request(options, res => {
        // Same as previous example
        res.on('data', d=> { console.log(d.toString())
        })
    })

    myRequest.on("error", console.error)
    myRequest.end()
});





const webTokenHelper = function() {
    console.log(Date.now())
}



