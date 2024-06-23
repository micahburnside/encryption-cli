const fs = require('fs');
const getInput = require('./getInput');
const { isYes, isNo } = require('./userResponse');

async function checkFileExistence(filePath) {
  if (fs.existsSync(filePath)) {
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
  return true;
}

module.exports = checkFileExistence;
