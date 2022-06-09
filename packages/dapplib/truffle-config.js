require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note spike pulp install derive slot genuine'; 
let testAccounts = [
"0x3e9a93ac5fc8b18c637484758e65912c82d05a20c596bc984b1c4cfbede1ad4a",
"0xcb68dd57e93f0985da5487d50b25f5923933ec149296b5d88888f6b900082b0f",
"0x8da5ac2d2f909a4bf33ddd48c24ea7b98daaff166e6e0a9457e8951b1a333f94",
"0xb1f35327d307615efe95d4fc52f972e960705f8d15f60ca86c4055b1bdedff0a",
"0xe47d6f8dd73cbb60c7516ec9e08f6d4c510c46fd071b1dfd01fd16ef984948c5",
"0x497a9629716286adf9d0e2d7a4edede90f918391afd33df4c35384baec5b41a9",
"0xe3130ba7d3faf1262ac38f9ae4095367c8ac22f252d84404d28281952b3d2314",
"0xa2fcb5629232c79607bb1d91a78d49e281476d519dcace7e54657f20d5ad37ad",
"0xeeff8ca6071fc81e4f18aac6780fa8dd487224ada0a9230a21fcf9d2b96c79b5",
"0x3bb731b94acdfcc351a5a3c3d81790058178fe9e836158abdd5100ab56b518e2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

