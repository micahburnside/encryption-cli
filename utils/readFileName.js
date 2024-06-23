// const fs = require('fs');
// const path = require('path');
// const getInput = require('./getInput');
// const { isYes, isNo } = require('./userResponse');
//
// async function readFileName(prompt, storagePath, defaultName) {
//   const fileName = await getInput(prompt);
//   const filePath = path.join(storagePath, fileName.trim() || defaultName);
//
//   console.log(`Checking if file exists: ${filePath}`);
//
//   if (fs.existsSync(filePath)) {
//     const overwrite = await getInput(`File ${filePath} already exists. Do you want to overwrite it? (yes/no): `);
//     console.log(`User chose to overwrite: "${overwrite}"`);
//
//     if (isYes(overwrite) || overwrite.trim() === '') { // Handle empty response as "yes"
//       console.log(`Returning file path for overwriting: ${filePath}`);
//       return filePath;
//     } else if (isNo(overwrite)) {
//       console.log(`Operation aborted. File ${filePath} already exists.`);
//       return null;
//     } else {
//       console.log('Invalid response. Please choose "yes" or "no".');
//       return await readFileName(prompt, storagePath, defaultName); // Prompt again for a valid response
//     }
//   }
//
//   console.log(`Returning new file path: ${filePath}`);
//   return filePath;
// }
//
// module.exports = readFileName;
const fs = require('fs');
const path = require('path');
const getInput = require('./getInput');
const { isYes, isNo } = require('./userResponse');

const checkFileExistence = (filePath) => {
  try {
    return fs.existsSync(filePath);
  } catch (err) {
    console.error(err);
    return false;
  }
};

async function readFileName(prompt, storagePath, defaultName) {
  const fileName = await getInput(prompt);
  const filePath = path.join(storagePath, fileName.trim() || defaultName);

  console.log(`Checking if file exists: ${filePath}`);

  if (checkFileExistence(filePath)) {
    const overwrite = await getInput(`File ${filePath} already exists. Do you want to overwrite it? (yes/no): `);
    console.log(`User chose to overwrite: "${overwrite}"`);

    if (isYes(overwrite) || overwrite.trim() === '') {
      console.log(`Returning file path for overwriting: ${filePath}`);
      return filePath;
    } else if (isNo(overwrite)) {
      console.log(`Operation aborted. File ${filePath} already exists.`);
      return null;
    } else {
      console.log('Invalid response. Please choose "yes" or "no".');
      return await readFileName(prompt, storagePath, defaultName);
    }
  }

  console.log(`Returning new file path: ${filePath}`);
  return filePath;
}

module.exports = readFileName;
