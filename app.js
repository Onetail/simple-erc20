const CryptoMethod = require('./crypto');

(async () => {
  const crypto = new CryptoMethod({
    host: 'localhost',
    port: '7545',
    abi: require('./build/contracts/WayneErc20.json'),
    address: '0xdB70902a0cfB434Bb8D41502E659C7b19cCD7B11',
  });

  const balance = await crypto.balanceOf();
  console.log('\x1b[32m', '\n---- Debug ----\n');
  console.log('\x1b[36m', 'balance = ', balance);
  console.log('\x1b[32m', '\n---------------', '\x1b[0m');
})();
