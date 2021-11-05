const Web3 = require('web3');

module.exports = class Crypto {
  constructor({host, port, address, abi}) {
    this.web3 = new Web3(`ws://${host}:${port}`);
    this.address = address;
    this.abi = abi;
    this.contract = new this.web3.eth.Contract(this.abi.abi, this.address);
  }

  async balanceOf(address) {
    const balance = this.contract.methods.balanceOf(address);

    return balance;
  }
};
