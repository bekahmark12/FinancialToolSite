class TransactionItem{

    constructor(id, categoryId, status, transactionDataString, amount, description, originalDescription, categoryName,
                baseType, container, runningBalance, merchant, amountDouble, memo, accountItem) {
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



}