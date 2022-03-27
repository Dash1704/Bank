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
  }

  withdraw(funds){
    this.balance -= funds
  }

}

module.exports = Bank