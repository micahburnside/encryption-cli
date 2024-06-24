const checkKeyFormat = require('../utils/checkKeyFormat');
const getInput = require('../utils/getInput');
const getValidFilePath = require('../utils/getValidFilePath');
const { pemToHex, hexToPem } = require('../utils/keyConverter');

async function printPublicKey() {
  try {
    const validPublicKeyPath = await getValidFilePath('Enter the path to the public key: ', 'publicKey.pem');

    console.log('Loading public key...');
    const { isPemFormat, publicKey } = await checkKeyFormat(validPublicKeyPath);

    const validateFormat = (input) => {
      const format = input.trim().toLowerCase();
      if (format !== 'pem' && format !== 'hex') {
        throw new Error('Invalid format. Please choose either pem or hex.');
      }
    };

    const format = await getInput(`The current format is ${isPemFormat ? 'PEM' : 'Hex'}. Do you want to print it in pem or hex? `, validateFormat);

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
