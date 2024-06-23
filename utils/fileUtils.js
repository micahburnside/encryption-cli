const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function loadPublicKey(publicKeyPath) {
  const publicKeyPem = fs.readFileSync(publicKeyPath, 'utf8');
  return publicKeyPem;
}

function loadPrivateKey(privateKeyPath) {
  const privateKeyPem = fs.readFileSync(privateKeyPath, 'utf8');
  return crypto.createPrivateKey(privateKeyPem);
}

module.exports = { loadPublicKey, loadPrivateKey };
