
const Bank = require('./bank')

  beforeEach(() => {
    bank = new Bank
  })

    it('should give a balance of 0', () => {
      expect(bank.getBalance()).toEqual(0.00)
    })
    
    it('should deposit money into the bank', () => {
      bank.deposit(5)
      expect(bank.getBalance()).toEqual(5.00)
    })

  