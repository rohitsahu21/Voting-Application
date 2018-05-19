require('babel-register')
module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 470000,
      from: '0x5c6c74de9eab0f885a8cb9620f477f89f9188425'
    }
  }
}
