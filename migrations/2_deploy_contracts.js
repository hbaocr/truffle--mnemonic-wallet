let ConsortiumCoin = artifacts.require("ConsortiumCoin");

module.exports = async function(deployer, network, accounts)  {
  // this account is created by HDWalletProvider from mnemonic
  console.log("Deploy contract using account: ", accounts[0]);

  await deployer.deploy(ConsortiumCoin);
  console.log(`===> Deployed ConsortiumCoin at ${ConsortiumCoin.address}`);
};
