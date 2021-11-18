// models 
function account(pin, type, deposit){
    this.id = Math.random * 1000;
    this.type = type;
    this.pin = pin; 
    this.amount = deposit;
}

function customer(name, username, password, []){
    this.name = name; 
    this.username = username;
    this.password = password;
    this.accounts = [];
}

historyLogs: [] 
// returns transaction information
function addTransaction(accId, operation, amount) {
    let input = {
        accId,
        operation,
        amount,
        operationTime: new Date().toLocaleString('en-GB')
    };
    // historyLogs.push(input);
    return input;
}