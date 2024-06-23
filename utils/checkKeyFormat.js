const { loadPublicKey } = require('../utils/fileUtils');
const { pemToHex, hexToPem } = require('../utils/keyConverter');

async function checkKeyFormat(storagePath) {
  const publicKey = loadPublicKey(storagePath);
  let isPemFormat = publicKey.includes('-----BEGIN PUBLIC KEY-----');

  return { isPemFormat, publicKey };
}

module.exports = checkKeyFormat;
