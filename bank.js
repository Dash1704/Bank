class Bank {

  constructor(){
    this.balance = 0
    this.header = "Date || Credit/Debit || Balance"
    this.statement = []
  }

  getStatement(){
    console.log(this.header)
    const statement = this.statement
    console.log(statement.join("\r\n"))
  }

  getBalance(){
    return this.balance
  }

  deposit(money, date){
    this.balance += money
    this.statement.push(`${date} || ${money} || ${this.balance}`)
  }

  withdraw(money, date){
    this.balance -= money
    this.statement.push(`${date} || ${money} || ${this.balance}`)
  }
}

module.exports = Bank