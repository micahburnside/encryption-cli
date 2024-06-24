// const fs = require('fs').promises;
// const path = require('path');
// const getInput = require('./getInput');
//
// async function getValidFilePath(initialPrompt, defaultFileName) {
//   while (true) {
//     let filePath = await getInput(initialPrompt);
//
//     if (!filePath.trim()) {
//       console.error('Error: Path cannot be empty.');
//       continue;
//     }
//
//     try {
//       const stats = await fs.lstat(filePath);
//       if (stats.isDirectory()) {
//         filePath = path.join(filePath, defaultFileName);
//       }
//       await fs.access(path.dirname(filePath));
//       return filePath;
//     } catch (error) {
//       console.error(`Invalid file path: ${error.message}`);
//       initialPrompt = 'Enter a valid path: ';
//     }
//   }
// }
//
// module.exports = getValidFilePath;
// file getValidFilePath.js
const fs = require('fs').promises;
const path = require('path');
const getInput = require('./getInput');

async function getValidFilePath(initialPrompt, defaultFileName, checkOverwrite = true) {
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

      if (checkOverwrite) {
        // Check if the file exists and prompt for overwrite confirmation
        try {
          await fs.access(filePath);
          const overwrite = await getInput(`File ${filePath} already exists. Do you want to overwrite it? (yes/no): `, (input) => {
            const response = input.trim().toLowerCase();
            if (response !== 'yes' && response !== 'no') {
              throw new Error('Please enter "yes" or "no".');
            }
          });

          if (overwrite.trim().toLowerCase() === 'yes') {
            return filePath;
          } else {
            const nextAction = await getInput('Do you want to enter a new path or return to the main menu? (new/menu): ', (input) => {
              const response = input.trim().toLowerCase();
              if (response !== 'new' && response !== 'menu') {
                throw new Error('Please enter "new" or "menu".');
              }
            });

            if (nextAction.trim().toLowerCase() === 'menu') {
              return null; // Indicate that the user wants to return to the main menu
            } else {
              initialPrompt = 'Enter a new path to save the file: ';
              continue;
            }
          }
        } catch (accessError) {
          // File does not exist, so it's safe to proceed
          return filePath;
        }
      } else {
        return filePath;
      }
    } catch (error) {
      console.error(`Invalid file path: ${error.message}`);
      initialPrompt = 'Enter a valid path: ';
    }
  }
}

module.exports = getValidFilePath;
