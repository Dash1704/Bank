const Bank = require('./bank')


describe(Bank, () => {
  describe('getBalance', () => {
    it('should give a balance of 0', () => {
      const bank = new Bank
      expect(bank.getBalance()).toEqual(0)
    })
  })
})