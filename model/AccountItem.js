class AccountItem {

    constructor(title = "", subTitle = "", balance = "", accId = "", container = "", dueDateString = "", dueDate = "", accNumber = "", iconUrl = "") {
        this.title = title;
        this.subTitle = subTitle;
        this.balance = balance;
        this.accId = accId;
        this.container = container;
        this.dueDateString = dueDateString;
        this.dueDate = dueDate;
        this.accNumber = accNumber;
        this.iconUrl = iconUrl;
    }

    getAccountArray(json){
        const obj = JSON.parse(json);
        const array = obj["account"];
        var accArray = [];

        for(var i = 0; i < array.length; i++){
          var acc = new AccountItem(array[i].accountName, array[i].accountNumber + array[i].providerName,
                                    array[i].balance.amount, array[i].id, array[i].CONTAINER, array[i].dueDateString, array[i].dueDate,
                                    array[i].fullAccountNumber, array[i].iconUrl);
          accArray.push(acc)
          console.log(acc.title);
        }

        return accArray
    }
}
module.exports = AccountItem;














