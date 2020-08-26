const AccountItem = require('../model/AccountItem')
var express = require('express');
var router = express.Router();
let apiHelper;
apiHelper = require('./apiHelper.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '360 Financial Tools' });

  // apiHelper.getAccountData()
  const issuerId = process.env.API_KEY;
  console.log(issuerId)
});


// var sample = '{\n' +
//     ' "account": [{\n' +
//     '   "fullAccountNumber": "1234567890",\n' +
//     '   "holder": [{\n' +
//     '    "ownership": "OTHERS",\n' +
//     '    "name": {\n' +
//     '     "fullName": "Timothy A Rodriquez"\n' +
//     '    }\n' +
//     '   }],\n' +
//     '   "CONTAINER": "bank",\n' +
//     '   "isManual": false,\n' +
//     '   "isAsset": true,\n' +
//     '   "lastUpdated": "2017-09-21T06:08:29Z",\n' +
//     '   "userClassification":"PERSONAL",\n' +
//     '   "currentBalance": {\n' +
//     '    "amount": 20000,\n' +
//     '    "currency": "USD"\n' +
//     '   },\n' +
//     '   "availableBalance": {\n' +
//     '    "amount": 20000,\n' +
//     '    "currency": "USD"\n' +
//     '   },\n' +
//     '   "autoRefresh": {\n' +
//     '    "additionalStatus": "SCHEDULED",\n' +
//     '    "asOfDate": "2019-05-13T11:03:11Z",\n' +
//     '    "status": "ENABLED"\n' +
//     '   },\n' +
//     '   "displayedName": "Timothy",\n' +
//     '   "id": 2251053,\n' +
//     '   "balance": {\n' +
//     '    "amount": 20000,\n' +
//     '    "currency": "USD"\n' +
//     '   },\n' +
//     '   "accountName": "NOTAXDOCS",\n' +
//     '   "accountNumber": "xxxxxxxx",\n' +
//     '   "aggregationSource": "USER",\n' +
//     '   "dataset": [{\n' +
//     '    "lastUpdateAttempt": "2017-09-21T06:08:51Z",\n' +
//     '    "updateEligibility": "ALLOW_UPDATE",\n' +
//     '    "name": "ACCT_PROFILE",\n' +
//     '    "lastUpdated": "2017-09-21T06:08:51Z",\n' +
//     '    "additionalStatus": "AVAILABLE_DATA_RETRIEVED"\n' +
//     '   }],\n' +
//     '   "providerName": "Wells Fargo",\n' +
//     '   "accountStatus": "ACTIVE",\n' +
//     '   "accountType": "SAVINGS",\n' +
//     '   "classification": "PERSONAL",\n' +
//     '   "providerId": "5",\n' +
//     '   "includeInNetWorth": true,\n' +
//     '   "createdDate": "2017-09-21T06:08:26Z",\n' +
//     '   "providerAccountId": 2204099\n' +
//     '  },\n' +
//     '  {\n' +
//     '   "fullAccountNumber": "1234567890",\n' +
//     '   "holder": [{\n' +
//     '    "ownership": "OTHERS",\n' +
//     '    "name": {\n' +
//     '     "fullName": "Divina B Reyes"\n' +
//     '    }\n' +
//     '   }],\n' +
//     '   "CONTAINER": "bank",\n' +
//     '   "isManual": false,\n' +
//     '   "isAsset": true,\n' +
//     '   "lastUpdated": "2017-09-21T06:08:29Z",\n' +
//     '   "userClassification":"PERSONAL",\n' +
//     '   "currentBalance": {\n' +
//     '    "amount": 20000,\n' +
//     '    "currency": "USD"\n' +
//     '   },\n' +
//     '   "availableBalance": {\n' +
//     '    "amount": 20000,\n' +
//     '    "currency": "USD"\n' +
//     '   },\n' +
//     '   "displayedName": "Divina",\n' +
//     '   "id": 2251052,\n' +
//     '   "balance": {\n' +
//     '    "amount": 20000,\n' +
//     '    "currency": "USD"\n' +
//     '   },\n' +
//     '   "autoRefresh": {\n' +
//     '    "additionalStatus": "SCHEDULED",\n' +
//     '    "asOfDate": "2019-05-13T11:03:11Z",\n' +
//     '    "status": "ENABLED"\n' +
//     '   },\n' +
//     '   "accountName": "TBank2_All_403",\n' +
//     '   "accountNumber": "xxxxxxxx",\n' +
//     '   "aggregationSource": "USER",\n' +
//     '   "dataset": [{\n' +
//     '    "lastUpdateAttempt": "2017-09-21T06:08:51Z",\n' +
//     '    "updateEligibility": "ALLOW_UPDATE",\n' +
//     '    "name": "ACCT_PROFILE",\n' +
//     '    "lastUpdated": "2017-09-21T06:08:51Z",\n' +
//     '    "additionalStatus": "AVAILABLE_DATA_RETRIEVED"\n' +
//     '   }],\n' +
//     '   "providerName": "Wells Fargo",\n' +
//     '   "accountStatus": "ACTIVE",\n' +
//     '   "accountType": "SAVINGS",\n' +
//     '   "classification": "PERSONAL",\n' +
//     '   "providerId": "5",\n' +
//     '   "includeInNetWorth": true,\n' +
//     '   "createdDate": "2017-09-21T06:08:26Z",\n' +
//     '   "providerAccountId": 2204099\n' +
//     '  },\n' +
//     '  {\n' +
//     '   "fullAccountNumber": "1234567890",\n' +
//     '   "holder": [{\n' +
//     '    "ownership": "OTHERS",\n' +
//     '    "name": {\n' +
//     '     "fullName": "Larry R Reed"\n' +
//     '    }\n' +
//     '   }],\n' +
//     '   "CONTAINER": "bank",\n' +
//     '   "isManual": false,\n' +
//     '   "isAsset": true,\n' +
//     '   "lastUpdated": "2017-09-21T06:08:29Z",\n' +
//     '   "userClassification":"PERSONAL",\n' +
//     '   "currentBalance": {\n' +
//     '    "amount": 10000,\n' +
//     '    "currency": "USD"\n' +
//     '   },\n' +
//     '   "availableBalance": {\n' +
//     '    "amount": 10000,\n' +
//     '    "currency": "USD"\n' +
//     '   },\n' +
//     '   "autoRefresh": {\n' +
//     '    "additionalStatus": "SCHEDULED",\n' +
//     '    "asOfDate": "2019-05-13T11:03:11Z",\n' +
//     '    "status": "ENABLED"\n' +
//     '   },\n' +
//     '   "displayedName": "Larry Reed",\n' +
//     '   "id": 2251051,\n' +
//     '   "balance": {\n' +
//     '    "amount": 10000,\n' +
//     '    "currency": "USD"\n' +
//     '   },\n' +
//     '   "accountName": "YBank_All_Success",\n' +
//     '   "accountNumber": "xxxxxxxx",\n' +
//     '   "aggregationSource": "USER",\n' +
//     '   "dataset": [{\n' +
//     '    "lastUpdateAttempt": "2017-09-21T06:08:51Z",\n' +
//     '    "updateEligibility": "ALLOW_UPDATE",\n' +
//     '    "name": "ACCT_PROFILE",\n' +
//     '    "lastUpdated": "2017-09-21T06:08:51Z",\n' +
//     '    "additionalStatus": "AVAILABLE_DATA_RETRIEVED"\n' +
//     '   }],\n' +
//     '   "providerName": "Wells Fargo",\n' +
//     '   "accountStatus": "ACTIVE",\n' +
//     '   "accountType": "SAVINGS",\n' +
//     '   "classification": "PERSONAL",\n' +
//     '   "providerId": "5",\n' +
//     '   "includeInNetWorth": true,\n' +
//     '   "createdDate": "2017-09-21T06:08:26Z",\n' +
//     '   "providerAccountId": 2204099\n' +
//     '  }\n' +
//     ' ]\n' +
//     '}';
//
// var acc = new AccountItem();
// acc.getAccountArray(sample);

module.exports = router;

