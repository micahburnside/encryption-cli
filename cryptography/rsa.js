const crypto = require('crypto');
const fs = require('fs');

function generateRSAKeys() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
    }
  });
  return { publicKey, privateKey };
}

function savePrivateKey(privateKeyPath, privateKey) {
  fs.writeFileSync(privateKeyPath, privateKey);
}

function savePublicKey(publicKeyPath, publicKey) {
  fs.writeFileSync(publicKeyPath, publicKey);
}

function saveKey(publicKeyPath, publicKey, privateKeyPath, privateKey, isPrivate ) {
  fs.writeFileSync(publicKeyPath, publicKey, privateKeyPath, privateKey, isPrivate);
}

module.exports = { generateRSAKeys, savePrivateKey, savePublicKey, saveKey };
