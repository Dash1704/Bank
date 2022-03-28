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

  deposit(money, transactedDate){
    this.balance += money
    this.statement.push("Deposited: " + money)
    this.statement.push("Balance: " + this.balance)
    const date = transactedDate
    this.statement.push(date)
  }

  withdraw(funds){
    this.balance -= funds
    this.statement.push("Withdrew: " + funds)
    this.statement.push("Balance: " + this.balance)
  }
}

module.exports = Bank