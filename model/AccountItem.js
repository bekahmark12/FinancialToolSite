class AccountItem {

    constructor(title = "", subTitle = "", balance = "", accId = "", container = "", dueDateString = "", dueDate = "", accNumber = "", iconUrl = "", accountType= "") {
        this.title = title;
        this.subTitle = subTitle;
        this.balance = balance;
        this.accId = accId;
        this.container = container;
        this.dueDateString = dueDateString;
        this.dueDate = dueDate;
        this.accNumber = accNumber;
        this.iconUrl = iconUrl;
        this.accountType = accountType;
    }

    getAccountArray(json){
        const obj = JSON.parse(json);
        const array = obj["account"];
        var accArray = [];

        for(var i = 0; i < array.length; i++){
            // const newAccObj = array[i];
            // var acc = new AccountItem(1, 1, 1, 1, 1, 1, 1, 1, 1)
          var acc = new AccountItem(array[i].accountName, array[i].accountNumber + array[i].providerName,
                                    array[i].balance.amount, array[i].id, array[i].CONTAINER, array[i].dueDateString, array[i].dueDate,
                                    array[i].fullAccountNumber, array[i].iconUrl, array[i].accountType);
          accArray.push(acc)
          
        }

        return accArray;
    }
}
module.exports = AccountItem;














