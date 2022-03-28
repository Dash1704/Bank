class Bank {

  constructor(){
    this.balance = 0
    this.header = "Date || Credit/Debit || Balance"
    this.statement = []
  }

  getStatement(){
    console.log(this.header)
    const arr = this.statement
    console.log(arr.join("\r\n"))
    
  }

  getBalance(){
    return this.balance
  }

  deposit(money, transactedDate){
    const date = transactedDate
    this.balance += money
    this.statement.push(`${date} || ${money} || ${this.balance}`)
  }

  withdraw(money, transactedDate){
    const date = transactedDate
    this.balance -= money
    this.statement.push(`${date} || ${money} || ${this.balance}`)
  }
}

module.exports = Bank