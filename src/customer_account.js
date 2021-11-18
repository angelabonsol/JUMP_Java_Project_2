// models 
function account(pin, deposit){
    this.id = Math.random * 1000;
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
// Logs about past transactions
function updateHistoryLogs(operation, amount) {
    let input = {
        operation,
        amount,
        operationTime: new Date().toLocaleString('en-GB')
    };
    // historyLogs.push(input);
    return input;
}