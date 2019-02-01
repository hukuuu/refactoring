const statement = require('./statement')
const assert = require('assert')

const plays = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  aslike: { name: 'As You Like It', type: 'tragedy' },
  othello: { name: 'Othello', type: 'tragedy' }
}

const invoices = [
  {
    customer: 'BigCo',
    performances: [
      { playID: 'hamlet', audience: 55 },
      { playID: 'aslike', audience: 35 },
      { playID: 'othello', audience: 40 }
    ]
  }
]

const test = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $450.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,600.00
You earned 40 credits`

const result = statement.statement(invoices[0], plays)

// console.log(test.length)
// console.log(result.length)
assert(result.trim() == test.trim())
