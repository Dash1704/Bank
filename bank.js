const today = new Date();
const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

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

  deposit(money){
    this.balance += money
    this.statement.push(`${date} || ${money.toFixed(2)} || ${this.balance.toFixed(2)}`)
  }

  withdraw(money){
    this.balance -= money
    this.statement.push(`${date} || ${money.toFixed(2)} || ${this.balance.toFixed(2)}`)
  }
}

module.exports = Bank