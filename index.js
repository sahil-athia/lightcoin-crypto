
class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (!this.isAllowed()) {
      return false;
    }
    this.time = Date();
    this.account.addTransaction(this);
    return true;
  }
}


class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }
  isAllowed() {
    if (this.account.balance - this.amount >= 0) {
      return true;
    }
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

  isAllowed() {
    return true;
  }
}

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    this.transactions.forEach( element => {
      balance += element.value;
    })
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

// const myAccount = new Account('bob');

// console.log('Starting Account Balance: ', myAccount.balance);


// const t1 = new Withdrawal(1.00, myAccount);
// console.log('result:', t1.commit());
// console.log('Account Balance: ', myAccount.balance);


// const t2 = new Deposit(9.99, myAccount);
// console.log('result:', t2.commit());
// console.log('Account Balance: ', myAccount.balance);


// const t3 = new Withdrawal(9.99, myAccount);
// console.log('result:', t3.commit());

// console.log('Ending Account Balance: ', myAccount.balance);

// console.log('transactions', myAccount.transactions);

