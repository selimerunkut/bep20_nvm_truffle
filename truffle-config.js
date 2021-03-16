const web3 = require('web3');

const HDWalletProvider = require('@truffle/hdwallet-provider');

const {
  LOCAL_PRIVATE_KEYS,
  BSC_MAINNET_PRIVATE_KEY,
  BSC_TESTNET_PRIVATE_KEY } = require('./.secrets.json');
/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    mainnet: {
      provider: function () {
        return new HDWalletProvider(
          BSC_MAINNET_PRIVATE_KEY, // Dont't forget to export PRIVATE_KEY="<your private key>" first
          "https://bsc-dataseed1.binance.org:443"
        );
      },
      network_id: "*",
      gas: 10000000,
      gasPrice: 10000000000,
    },
    bsctestnet: {
      provider: function () {
        return new HDWalletProvider(
          BSC_TESTNET_PRIVATE_KEY, // Dont't forget to export PRIVATE_KEY="<your private key>" first
          "https://data-seed-prebsc-1-s1.binance.org:8545"
        );
      },
      network_id: "*",
      gas: 10000000,
      gasPrice: 10000000000,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 1337
        }
      }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ]
};
