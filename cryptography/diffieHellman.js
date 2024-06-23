const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function generateDiffieHellmanKeys() {
  const dh = crypto.createDiffieHellman(2048);
  dh.generateKeys();
  return dh;
}

function saveDiffieHellmanKeys(storagePath, dhKeys) {
  const publicKeyPath = path.join(storagePath, 'dhpublicKey.pem');
  const privateKeyPath = path.join(storagePath, 'dhprivateKey.pem');
  fs.writeFileSync(publicKeyPath, dhKeys.getPublicKey('hex'));
  fs.writeFileSync(privateKeyPath, dhKeys.getPrivateKey('hex'));
}

module.exports = { generateDiffieHellmanKeys, saveDiffieHellmanKeys };
