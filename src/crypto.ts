import Web3 from 'web3';
import {AbiItem} from 'web3-utils';

export class Crypto {
  address: string;
  abi: {abi: any[]};
  contract: any;
  web3: Web3;
  constructor({
    host,
    port,
    address,
    abi,
  }: {
    host: string;
    port: string;
    address: string;
    abi: {abi: any[]};
  }) {
    this.web3 = new Web3(`ws://${host}:${port}`);
    this.address = address;
    this.abi = abi;
    this.contract = new this.web3.eth.Contract(this.abi.abi, this.address);
  }

  async balanceOf(address: string) {
    const balance = this.contract.methods.balanceOf(address);

    return balance;
  }

  async test() {
    console.log('\x1b[32m', '\n---- Debug ----\n');
    console.log(
      '\x1b[36m',
      'web3.eth.defaultAccount = ',
      this.web3.eth.defaultAccount,
      this.contract.defaultAccount,
      this.contract.transactionBlockTimeout,
    );
    console.log('\x1b[32m', '\n---------------', '\x1b[0m');
  }
}
