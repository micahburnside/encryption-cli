const fs = require('fs').promises;
const path = require('path');
const getInput = require('./getInput');

async function getValidFilePath(prompt) {
  let filePath = await getInput(prompt);

  // Check if provided path is a directory
  let stats;
  try {
    stats = await fs.lstat(filePath);
  } catch (err) {
    console.error(`Path ${filePath} does not exist.`);
  }

  if (stats && stats.isDirectory()) {
    filePath = path.join(filePath, 'publicKey.pem');
  }

  // Keep prompting until a valid file path is provided
  while (true) {
    try {
      await fs.access(filePath);
      break; // If file exists, break the loop
    } catch (err) {
      console.error(`File ${filePath} does not exist.`);
      const retryResponse = await getInput('Do you want to provide a new path? (yes/no): ');

      if (retryResponse.trim().toLowerCase() === 'yes') {
        filePath = await getInput(prompt);
        try {
          stats = await fs.lstat(filePath);
          if (stats.isDirectory()) {
            filePath = path.join(filePath, 'publicKey.pem');
          }
        } catch (err) {
          console.error(`Path ${filePath} does not exist.`);
        }
      } else {
        console.log('Exiting the client.');
        process.exit(0);
      }
    }
  }

  return filePath;
}

module.exports = getValidFilePath;
