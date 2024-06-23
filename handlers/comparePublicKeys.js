const getValidFilePath = require('../utils/getValidFilePath');
const { loadFile } = require('../utils/fileUtils');

async function comparePublicKeys(storagePath) {
  try {
    const firstPublicKeyPath = await getValidFilePath('Enter the path to the first public key: ', storagePath);
    const secondPublicKeyPath = await getValidFilePath('Enter the path to the second public key: ', storagePath);

    const firstPublicKey = (await loadFile(firstPublicKeyPath)).toString().trim();
    const secondPublicKey = (await loadFile(secondPublicKeyPath)).toString().trim();

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
