

const ecashaddr = require('ecashaddrjs');
const bs58 = require('bs58');

module.exports = {
    addressToHash160: function (address) {
        try {
        // decode address hash
        const { hash } = ecashaddr.decode(address);
        // encode the address hash to legacy format (bitcoin)
        const legacyAdress = bs58.encode(hash);
        // convert legacy to hash160
        const hash160 = Buffer.from(bs58.decode(legacyAdress)).toString(
            'hex',
        );
        return hash160;
    } catch (err) {
        console.log('Error converting address to hash160');
        throw err;
    }
    },
};