//https://eth-ropsten.alchemyapi.io/v2/g8gtycvWOfPsHkkaX5NQvlUNefCERA5E

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/g8gtycvWOfPsHkkaX5NQvlUNefCERA5E',
      accounts: ['3f6ca00c60549e246eb1c07f658995f69c244268c81c9844490d2789f57d686b'],
    },
  },
};