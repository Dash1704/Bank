class Bank {

  constructor(){
    this.balance = 0
    this.header = "Date || Credit/Debit || Balance"
    this.statement = []
  }

  printStatement(){
    return this.getStatement()
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

  getDate(){
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    return date
  }
}

module.exports = Bank