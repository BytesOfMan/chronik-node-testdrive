const { ChronikClient } = require('chronik-client');
const chronik = new ChronikClient('https://chronik.fabien.cash');

async function getTxDetails(txid) {
    let txDetails;
    try {
        txDetails = await chronik.tx(txid);
        console.log(txDetails);
    } catch (err) {
        console.log(`Error in chronik.tx(${txid})`);
        console.log(err);
    }
}

getTxDetails(process.env.TXID);