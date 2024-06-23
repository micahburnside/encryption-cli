const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

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

function savePrivateKey(storagePath, privateKey) {
  const privateKeyPath = path.join(storagePath, 'privateKey.pem');
  fs.writeFileSync(privateKeyPath, privateKey);
}

function savePublicKey(storagePath, publicKey) {
  const publicKeyPath = path.join(storagePath, 'publicKey.pem');
  fs.writeFileSync(publicKeyPath, publicKey);
}

module.exports = { generateRSAKeys, savePrivateKey, savePublicKey };
