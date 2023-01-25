const { ChronikClient } = require('chronik-client');
const chronik = new ChronikClient('https://chronik.fabien.cash');
const { addressToHash160 } = require('./helperFunctions');

async function getTxHistory(address) {
  const hash160 = addressToHash160(address)
    let history;
    try {
        history = await chronik
            .script('p2pkh', hash160)
            .history(/*page=*/ 0, /*page_size=*/ 10);
        console.log(history);
    } catch (err) {
        console.log(`Error in chronik.script('p2pkh', ${hash160}).history()`);
        console.log(err);
    }
}

getTxHistory(process.env.ADDRESS);