// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      //gas: 6700000,
      network_id: '*', // Match any network id
      from: '0x9e78fa9325e3121cc2ea965032d73571080a44c2'
    },
    ropsten: {
      host: 'localhost',
      port: 8545,
      gas: 4700000,
      network_id: '3' // Match any network id
    },
    kovan: {
      host: 'localhost',
      port: 8545,
      gas: 4700000,
      network_id: '5' // Match any network id
    }
  }
}
