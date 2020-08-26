var express = require("express");
const api = require("./apiHelper.js");
const accountItem = require("../model/AccountItem.js");
const AccountItem = require("../model/AccountItem.js");
var router = express.Router();

router.get("/", function(req, res, next){
    var checking = 0;
    var savings = 0;
    var debt = 0;

    function calculateTotals(_callback){
        api.getAccountData(function(data){
        var ac = new AccountItem();
        var userAccounts = ac.getAccountArray(data);

        for(var i = 0; i < userAccounts.length; i++){
            
            var currentAccount = userAccounts[i];

            if(currentAccount.container === "bank"){
                (currentAccount.accountType === "CHECKING" ? checking += currentAccount.balance : savings += currentAccount.balance);
            }else{
                debt += currentAccount.balance;
            }
            
            
        }

        _callback()
        //console.log(checking);
        
    });
    }
    function renderPage(){
        calculateTotals(function(){
            res.render("dashboard", {
                checking: checking,
                savings: savings,
                debt: debt
            });

        // const user = res.app.get("user")

        // if (user){
        //     res.render("dashboard", { displayName: res.app.get("displayName")});

        // }else{
        //     res.app.set("error-message","Unauthorized access. Please log in")
        //     res.redirect("/error")
        // }
        });
        
    
    }
    
    
    renderPage();
    
    
    console.log("Getting dashboard.....")

    

});


module.exports = router;