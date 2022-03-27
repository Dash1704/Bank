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
  })

  describe('withdraw', () => {
    it('should withdraw money from the bank', () => {
      const bank = new Bank
      bank.deposit(20)
      bank.withdraw(10)
      expect(bank.getBalance()).toEqual(10)
    })
  })

  describe('this statement', () => {
    it('should equal an empty array to begin with', () => {
      const bank = new Bank
      expect(bank.statement).toEqual([])
    })
  })
})