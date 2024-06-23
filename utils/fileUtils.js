// const fs = require('fs');
// const path = require('path');
// const crypto = require('crypto');
//
// function loadPublicKey(publicKeyPath) {
//   const publicKeyPem = fs.readFileSync(publicKeyPath, 'utf8');
//   return publicKeyPem;
// }
//
// function loadPrivateKey(privateKeyPath) {
//   const privateKeyPem = fs.readFileSync(privateKeyPath, 'utf8');
//   return crypto.createPrivateKey(privateKeyPem);
// }
//
// function checkFileExistence(filePath) {
//   try {
//     return fs.existsSync(filePath);
//   } catch (err) {
//     console.error(err);
//     return false;
//   }
// }
//
// module.exports = {
//   loadPublicKey,
//   loadPrivateKey,
//   checkFileExistence
// };
const fs = require('fs').promises;
const getInput = require('./getInput');
const { isYes, isNo } = require('./userResponse');

async function loadFile(filePath) {
  if (await checkFileExistence(filePath, false)) { // false indicates not checking for overwrite
    const fileContents = await fs.readFile(filePath, 'utf8');
    return fileContents;
  } else {
    console.log('File loading operation aborted.');
    return null;
  }
}

async function checkFileExistence(filePath, checkOverwrite = true) {
  try {
    await fs.access(filePath);
    if (checkOverwrite) {
      const response = await getInput(`File ${filePath} already exists. Do you want to overwrite it? (yes/no): `);
      if (isYes(response)) {
        return true;
      } else if (isNo(response)) {
        return false;
      } else {
        console.log('Invalid response. Operation aborted.');
        return false;
      }
    }
    return true; // If not checking for overwrite, just return true as file exists
  } catch (err) {
    return false; // File does not exist
  }
}

module.exports = { loadFile, checkFileExistence };
