const ERC20 = artifacts.require('WayneErc20');
module.exports = function (deployer) {
  deployer.deploy(ERC20);
};
