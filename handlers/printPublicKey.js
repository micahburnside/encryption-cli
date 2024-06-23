const { loadFile } = require('../utils/fileUtils');
const { pemToHex, hexToPem } = require('../utils/keyConverter');
const getInput = require('../utils/getInput');
const getValidFilePath = require('../utils/getValidFilePath');

async function printPublicKey(storagePath) {
  try {
    const publicKeyPath = await getValidFilePath('Enter the path to the public key file or directory: ');

    console.log('Loading public key...');
    const publicKey = (await loadFile(publicKeyPath)).toString();
    const isPemFormat = publicKey.includes('-----BEGIN PUBLIC KEY-----');
    const format = await getInput(`The current format is ${isPemFormat ? 'PEM' : 'Hex'}. Do you want to print it in pem or hex? `);

    switch (format.trim().toLowerCase()) {
      case 'pem':
        if (isPemFormat) {
          console.log('Public Key (pem):');
          console.log(publicKey);
        } else {
          const publicKeyPem = hexToPem(publicKey);
          console.log('Public Key (pem):');
          console.log(publicKeyPem);
        }
        break;
      case 'hex':
        if (isPemFormat) {
          const publicKeyHex = pemToHex(publicKey);
          console.log('Public Key (hex):');
          console.log(publicKeyHex);
        } else {
          console.log('Public Key (hex):');
          console.log(publicKey);
        }
        break;
      default:
        console.error('Invalid format. Please choose either pem or hex.');
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

module.exports = printPublicKey;
