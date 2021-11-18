//menus and displays

function startMenu(){
    console.log("-----DOLLARSBANK ATM Welcomes You!!-----");
    console.log("Enter 1: Login");
    console.log("Enter 2: Open New Account");
    console.log("Enter 3: Exit");
}

function customerMenu(name){
    console.log("-----Welcome Back, " +  name  + "!-----");
    console.log("Enter 1: Login to an Account");
    console.log("Enter 2: View Customer Information");
    console.log("Enter 3: View Accounts");
}

function transactionMenu(accId){
    console.log("-----Accessing Account: " + accId + "-----");
    console.log("Transaction Menu:");
    console.log("Enter 1: Account Balance Check");
    console.log("Enter 2: Print Transactions");
    console.log("Enter 3: Update PIN");
    console.log("Enter 4: Withdraw Amount");
    console.log("Enter 5: Deposit Amount");
}

transactionMenu(123);