module.exports = {
  contracts_build_directory: './src/build/contracts',
  contracts_directory: './src/contracts',
  migrations_directory: './src/migrations',
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '5777',
    },
  },
  compilers: {
    solc: {
      version: '0.8.7', // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {
      //   // See the solidity docs for advice about optimization and evmVersion
      //   optimizer: {
      //     enabled: false,
      //     runs: 200,
      //   },
      //   evmVersion: 'byzantium',
      // },
    },
  },
  db: {
    enabled: false,
  },
};
