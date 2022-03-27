class Bank {

  constructor(){
    this.balance = 0
    this.statement = []
  }

  getBalance(){
    return this.balance
  }

  deposit(money){
    this.balance += money
  }

  withdraw(funds){
    this.balance -= funds
  }

}

module.exports = Bank