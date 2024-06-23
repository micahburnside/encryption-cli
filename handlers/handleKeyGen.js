const { generateRSAKeys, savePrivateKey, savePublicKey } = require('../cryptography/rsa');
const readFileName = require('../utils/readFileName');

async function handleKeyGen(storagePath) {
  console.log('Generating RSA keys...');
  const { publicKey, privateKey } = generateRSAKeys();

  const privateKeyPath = await readFileName('Enter the private key file name (default: privateKey.pem): ', storagePath, 'privateKey.pem');
  console.log(`privateKeyPath after readFileName: ${privateKeyPath}`);

  const publicKeyPath = await readFileName('Enter the public key file name (default: publicKey.pem): ', storagePath, 'publicKey.pem');
  console.log(`publicKeyPath after readFileName: ${publicKeyPath}`);

  if (privateKeyPath && publicKeyPath) {
    console.log('Saving RSA keys to storage...');
    savePrivateKey(privateKeyPath, privateKey);
    savePublicKey(publicKeyPath, publicKey);
    console.log('RSA keys generated and saved successfully.');
  } else {
    console.log('Operation aborted. RSA keys were not saved.');
  }
}

module.exports = handleKeyGen;
