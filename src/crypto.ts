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
    return await this.contract.methods.balanceOf(address);
  }

  async totalSupply() {
    return await this.contract.methods.totalSupply();
  }

  async transfer(toAddress: string, token: number) {
    return await this.contract.methods.transfer(toAddress, token);
  }

  async test() {
    const giveMoney = await this.transfer(
      '0xd5fE901DCdb28c029d8316476cef05C606034fa5',
      100,
    );
    console.log('\x1b[32m', '\n---- Debug ----\n');
    console.log('\x1b[36m', 'giveMoney = ', giveMoney);
    console.log('\x1b[32m', '\n---------------', '\x1b[0m');
  }

  async deploy() {
    await this.contract.deploy();
  }
}
