const { loadFile } = require('../utils/fileUtils');  // Assuming loadPublicKey was meant to be loadFile
const { pemToHex, hexToPem } = require('../utils/keyConverter');

async function checkKeyFormat(storagePath) {
  try {
    const publicKey = (await loadFile(storagePath)).toString();  // Make sure to await the async call
    const isPemFormat = publicKey.includes('-----BEGIN PUBLIC KEY-----');

    return { isPemFormat, publicKey };
  } catch (error) {
    throw new Error(`Error loading public key: ${error.message}`);
  }
}

module.exports = checkKeyFormat;
