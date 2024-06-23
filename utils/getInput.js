const readline = require('readline');

function getInput(prompt) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: true
    });

    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer.trim()); // Remove whitespace from input
    });
  });
}

module.exports = getInput;
