class TransactionItem{

    constructor(id = 0, categoryId = 0, status = "", transactionDataString = "", amount = "", description = "", originalDescription = "", categoryName = "",
                baseType = "", container = "", runningBalance = 1, merchant = "", amountDouble = 1, memo = "", accountItem = "") {
        this.id = id;
        this.categoryId = categoryId;
        this.status = status;
        this.transactionDataString = transactionDataString;
        this.amount = amount;
        this.description = description;
        this.originalDescription = originalDescription;
        this.categoryName = categoryName;
        this.baseType = baseType;
        this.container = container;
        this.runningBalance = runningBalance;
        this.merchant = merchant;
        this.amountDouble = amountDouble;
        this.memo = memo;
        this.accountItem = accountItem;
    }

    getTransactionArray(json){
        const obj = JSON.parse(json);
        const array = obj["transaction"];
        var transactionArray = [];

        for(var i = 0; i < array.length; i++){

            var tran = new TransactionItem(array[i].id, array[i].categoryId, array[i].status, array[i].transactionDataString,
                                          array[i].amount.amount, array[i].description.simple, array[i].description.original,
                                          array[i].category, array[i].baseType, array[i].CONTAINER, array[i].runningBalance.amount,
                                          array[i].merchant.name, array[i].amount.amount, array[i].memo, array[i].accountItem);

            transactionArray.push(tran)
            // console.log(acc.id);
        }

        return transactionArray
    }

}
module.exports = TransactionItem;