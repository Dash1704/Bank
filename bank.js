class Bank {

  constructor(){
    this.balance = 0
    this.statement = []
  }

  getStatement(){
    return this.statement
  }

  getBalance(){
    return this.balance
  }

  deposit(money){
    this.balance += money
    this.statement.push("Deposited: " + money)
    this.statement.push("Balance: " + this.balance)
  }

  withdraw(funds){
    this.balance -= funds
    this.statement.push("Withdrew: " + funds)
    this.statement.push("Balance: " + this.balance)
  }

}

module.exports = Bank