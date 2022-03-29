
const Bank = require('./bank')

  beforeEach(() => {
    bank = new Bank
  })

    it('should give a balance of 0', () => {
      expect(bank.getBalance()).toEqual(0)
    })
    
    it('should deposit money into the bank', () => {
      bank.deposit(5)
      expect(bank.getBalance()).toEqual(5)
    })

    // it('should show a deposit in the statement', () => {
    //   const bank = new Bank
    //   bank.deposit(5)
    //   expect(bank.getStatement()).toBe(
    //     "Date || Credit/Debit || Balance" +
    //     "\r\n" +
    //     "01/1/2022 || 5.00 || 5.00")
    // })


 
    it('should withdraw money from the bank', () => {
      bank.deposit(20)
      bank.withdraw(10)
      expect(bank.getBalance()).toEqual(10)
    })

    // it('should show a withdrawal in the statement', () => {
    //   const bank = new Bank
    //   bank.deposit(10)
    //   bank.withdraw(5)
    //   expect(bank.printStatement()).toEqual( 
    //   "Date || Credit/Debit || Balance" +
    //   "\r\n" +
    //   "28/3/2022 || 10.00 || 10.00" +
    //   "\r\n" + 
    //   "01/1/2022 || 5.00 || 5.00")
    // })


 
    // it('should return multiple transactions', () => {
    //   bank.deposit(20)
    //   bank.withdraw(10)
    //   expect(bank.getStatement().length).toBe(3);
    // })


  // describe('getStatement', () => {
  //   it('should show just the balance to begin with', () => {
  //     const bank = new Bank
  //     expect(bank.getStatement()).toEqual("Date || Credit/Debit || Balance")
  //   })
  // })