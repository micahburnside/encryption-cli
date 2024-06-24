const { generateRSAKeys, savePrivateKey, savePublicKey } = require('../cryptography/rsa');
const getValidFilePath = require('../utils/getValidFilePath');

async function handleKeyGen() {
  try {
    const validPrivateKeyPath = await getValidFilePath('Enter the path to save the private key: ', 'privateKey.pem');
    const validPublicKeyPath = await getValidFilePath('Enter the path to save the public key: ', 'publicKey.pem');

    console.log('Generating RSA keys...');
    const { publicKey, privateKey } = generateRSAKeys();

    console.log('Saving RSA keys to storage...');
    savePrivateKey(validPrivateKeyPath, privateKey);
    savePublicKey(validPublicKeyPath, publicKey);
    console.log('RSA keys generated and saved successfully.');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

module.exports = handleKeyGen;
