const fs = require('fs');
const { loadPublicKey } = require('../utils/fileUtils');
const { pemToHex, hexToPem } = require('../utils/keyConverter');
const getInput = require('../utils/getInput');
const path = require('path');

async function printPublicKey(storagePath) {
  try {
    let publicKeyPath = storagePath;

    // Check if the provided path is a directory
    if (fs.lstatSync(storagePath).isDirectory()) {
      publicKeyPath = path.join(storagePath, 'publicKey.pem');
    }

    console.log('Loading public key...');
    const publicKey = loadPublicKey(publicKeyPath);
    const isPemFormat = publicKey.includes('-----BEGIN PUBLIC KEY-----');
    const format = await getInput(`The current format is ${isPemFormat ? 'PEM' : 'Hex'}. Do you want to print it in pem or hex? `);

    if (format.trim().toLowerCase() === 'pem') {
      if (isPemFormat) {
        console.log('Public Key (pem):');
        console.log(publicKey);
      } else {
        const publicKeyPem = hexToPem(publicKey);
        console.log('Public Key (pem):');
        console.log(publicKeyPem);
      }
    } else if (format.trim().toLowerCase() === 'hex') {
      if (isPemFormat) {
        const publicKeyHex = pemToHex(publicKey);
        console.log('Public Key (hex):');
        console.log(publicKeyHex);
      } else {
        console.log('Public Key (hex):');
        console.log(publicKey);
      }
    } else {
      console.error('Invalid format. Please choose either pem or hex.');
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

module.exports = printPublicKey;
