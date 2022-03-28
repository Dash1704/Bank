const Bank = require('./bank')

describe(Bank, () => {
  describe('getBalance', () => {
    it('should give a balance of 0', () => {
      const bank = new Bank
      expect(bank.getBalance()).toEqual(0)
    })
  })

  describe('deposit', () => {
    it('should deposit money into the bank', () => {
      const bank = new Bank
      bank.deposit(5)
      expect(bank.getBalance()).toEqual(5)
    })

    it('should show a deposit in the statement', () => {
      const bank = new Bank
      bank.deposit(5, "01/01/2022")
      expect(bank.getStatement()).toBe(
        "Date || Credit/Debit || Balance 01/01/2022 || 5 || 5")
    })
  })

  describe('withdraw', () => {
    it('should withdraw money from the bank', () => {
      const bank = new Bank
      bank.deposit(20)
      bank.withdraw(10)
      expect(bank.getBalance()).toEqual(10)
    })

    it('should show a withdrawal in the statement', () => {
      const bank = new Bank
      bank.deposit(10, "28/03/2022")
      bank.withdraw(5, "01/01/2022")
      expect(bank.getStatement()).toEqual(
        "Date || Credit/Debit || Balance 28/03/2022 10 || 10 01/01/2022 || 5 || 5")
    })
  })

  describe('getStatement', () => {
    it('should show just the balance to begin with', () => {
      const bank = new Bank
      expect(bank.getStatement()).toEqual("")
    })
  })
})