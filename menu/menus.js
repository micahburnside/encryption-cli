const getInput = require('../utils/getInput.js');

async function handleInput() {
  const choice = await getInput('Please choose one of the following options:\na, b, c, d\n');

  switch(choice) {
    case 'a':
      console.log("You selected 'a'");
      break;
    case 'b':
      console.log("You selected 'b'");
      break;
    case 'c':
      console.log("You selected 'c'");
      break;
    case 'd':
      console.log("You selected 'd'");
      break;
    default:
      console.log("Unknown choice: " + choice);
  }
}

handleInput();


