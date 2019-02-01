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

console.log(statement.statement(invoices[0], plays))
