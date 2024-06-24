const fs = require('fs').promises;
const path = require('path');
const getInput = require('./getInput');

async function getValidFilePath(initialPrompt, defaultFileName) {
  while (true) {
    let filePath = await getInput(initialPrompt);

    if (!filePath.trim()) {
      console.error('Error: Path cannot be empty.');
      continue;
    }

    try {
      const stats = await fs.lstat(filePath);
      if (stats.isDirectory()) {
        filePath = path.join(filePath, defaultFileName);
      }
      await fs.access(path.dirname(filePath));
      return filePath;
    } catch (error) {
      console.error(`Invalid file path: ${error.message}`);
      initialPrompt = 'Enter a valid path: ';
    }
  }
}

module.exports = getValidFilePath;
