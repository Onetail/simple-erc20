import {Crypto} from './src/crypto';
import * as abi from './src/build/contracts/WayneErc20.json';
(async () => {
  const crypto = new Crypto({
    host: 'localhost',
    port: '7545',
    abi,
    address: '0xdB70902a0cfB434Bb8D41502E659C7b19cCD7B11',
  });

  await crypto.test();
})();
