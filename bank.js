class Bank {

  constructor(){
    this.balance = 0
    this.header = "Date || Credit/Debit || Balance"
    this.statement = []
  }



  getStatement(){
    console.log(this.header)
    const arr = this.statement
    console.log(arr.join(" || "))
  }

  getBalance(){
    return this.balance
  }

  deposit(money, transactedDate){
    const date = transactedDate
    this.statement.push(date)
    this.balance += money
    this.statement.push(money)
    this.statement.push(this.balance)
   
  }

  withdraw(funds, transactedDate){
    const date = transactedDate
    this.statement.push(date)
    this.balance -= funds
    this.statement.push(funds)
    this.statement.push(this.balance)
   
  }
}

module.exports = Bank