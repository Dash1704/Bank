const today = new Date();
const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

class Bank {

  constructor(){
    this.balance = 0
    this.header = "Date || Credit/Debit || Balance"
    this.statement = []
    this.money = 0
    this.date = []
  }

  printStatement(){
    return this.getStatement()
  }

  getStatement(){
    const header = this.header
    console.log(header)
    const statement = this.statement
    console.log(statement.join("\r\n"))
  }

  getBalance(){
    return this.balance
  }

  deposit(money){
    this.balance += money
    this.money += money
    this.statement.push(`${date} || ${this.money.toFixed(2)} || ${this.balance.toFixed(2)}`)
    this.money = 0
  }

  withdraw(money){
    this.balance -= money
    this.money += money
    this.statement.push(`${date} || ${this.money.toFixed(2)} || ${this.balance.toFixed(2)}`)
    this.money = 0
  }
}

module.exports = Bank