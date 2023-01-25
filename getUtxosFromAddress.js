const { ChronikClient } = require('chronik-client');
const chronik = new ChronikClient('https://chronik.fabien.cash');
const { addressToHash160 } = require('./helperFunctions');

async function getUtxos(address) {

  // Convert address to hash160
  const hash160 = addressToHash160(address);

    let utxos;
    try {
        utxos = await chronik.script('p2pkh', hash160).utxos();
        //console.log(utxos);
        console.log(utxos[0].utxos);
    } catch (err) {
        console.log(`Error in chronik.utxos(${hash160})`);
        console.log(err);
    }
}

getUtxos(process.env.ADDRESS);
