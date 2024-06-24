const readline = require('readline');

function getInput(prompt, validate) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    const askQuestion = () => {
      rl.question(prompt, async (answer) => {
        if (validate) {
          try {
            await validate(answer.trim());
            rl.close();
            resolve(answer.trim());
          } catch (error) {
            console.error(error.message);
            askQuestion();
          }
        } else {
          rl.close();
          resolve(answer.trim());
        }
      });
    };
    askQuestion();
  });
}

module.exports = getInput;
