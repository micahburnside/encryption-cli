const getValidFilePath = require('../utils/getValidFilePath');
const fileUtils = require('../utils/fileUtils');

async function comparePublicKeys() {
  try {
    const validFirstPublicKeyPath = await getValidFilePath('Enter the path to the first public key: ', 'publicKey.pem', false);
    const validSecondPublicKeyPath = await getValidFilePath('Enter the path to the second public key: ', 'publicKey.pem', false);

    const firstPublicKey = (await fileUtils.loadFile(validFirstPublicKeyPath)).toString().trim();
    const secondPublicKey = (await fileUtils.loadFile(validSecondPublicKeyPath)).toString().trim();

    if (firstPublicKey === secondPublicKey) {
      console.log('The public keys are the same.');
    } else {
      console.log('The public keys are different.');
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

module.exports = comparePublicKeys;
