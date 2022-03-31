require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net purpose hunt merry fog shed'; 
let testAccounts = [
"0xb22ed905ef66eca374005e76969561056769d3ef2545d3d476334f37306097ed",
"0xc6b4194523382f75439e2c4de1a8b967710c01b1d4e26cb14d2bc075df90c445",
"0x2ea3141b85ede75da7392770db6e617d7d4eee864dc2656e205ed9f9a7b77f35",
"0x81e188b9aa4b30b752edd3eb15585515906897f31fe76018dca8f15bec0acacd",
"0x40c0706402ceb9ea945bec5f11c9bc1c8ffeb9cf3016493b0368c89edefde31b",
"0x4996149506015e92648941e3114ab540147490ae122cebc665a662aa8448eb25",
"0x32312fca938a1728db2466dc892a891f4b639d84b097b4f757f0c97bcb05e101",
"0x4684e827efdcb459a2376f22c7e4ce705bfa554e38cdc7ad23cbd0be3f862a96",
"0x824ad6b8c5d2fa325fcadc36f3937fdb338cea75fa21a1a238b200f903685696",
"0x376bdd3eb7fd6e1c525aa078d4529af7addc261ace790e2acdf1d8f84276727f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


