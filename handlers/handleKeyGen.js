const { generateRSAKeys, savePrivateKey, savePublicKey } = require('../cryptography/rsa');
const { generateDiffieHellmanKeys, saveDiffieHellmanKeys } = require('../cryptography/diffieHellman');

async function handleKeyGen(storagePath) {
  console.log('Generating RSA keys...');
  const { publicKey, privateKey } = generateRSAKeys();
  console.log('RSA keys generated.');

  console.log('Saving keys to external storage...');
  savePrivateKey(storagePath, privateKey);
  savePublicKey(storagePath, publicKey);
  console.log('Keys saved to external storage.');

  console.log('Generating Diffie-Hellman keys...');
  const dhKeys = generateDiffieHellmanKeys();
  saveDiffieHellmanKeys(storagePath, dhKeys);
  console.log('Diffie-Hellman keys generated and saved.');
}

module.exports = handleKeyGen;
