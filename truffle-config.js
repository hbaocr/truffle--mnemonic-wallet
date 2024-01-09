const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonic_words = "boring chapter click museum across vendor about plastic chef ability token master";
let rmit_provider= new HDWalletProvider({
  mnemonic: {
    phrase: mnemonic_words
  },
  providerOrUrl: "https://mainnet.rmit.site",
  numberOfAddresses: 1,
  addressIndex: 0,
  shareNonce: false,
  chainId: `202306`,
  derivationPath: "m/44'/137'/0'/0/"//"m/44'/60'/0'/0" // This is the standard derivation path for Ethereum
});


module.exports = {
  // See http://truffleframework.com/docs/advanced/configuration
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    develop: {
      port: 8545
    },
    rmitpublic: {
      provider:rmit_provider,//() => new HDWalletProvider(mnemonic_words, "https://mainnet.rmit.site"),// rmitProvider,
      network_id: '202306',
      // gasPrice: 875000000,
      // gas: 2000000,
      networkCheckTimeout: 15000,
      confirmations: 1,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 50,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: false,     // Skip dry run before migrations? (default: false for public nets )
      production: true    // Treats this network as if it was a public net. (default: false)

    }
  },
  compilers: {
    solc: {
      version: "0.8.20",
      settings: {
        optimizer: {
          enabled: true,
          runs: 400
        },
        evmVersion: "byzantium"
      }
    }
  }
};
