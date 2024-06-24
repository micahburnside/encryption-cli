const getInput = require('./utils/getInput');
const handleKeyGen = require('./handlers/handleKeyGen');
const printPublicKey = require('./handlers/printPublicKey');
const comparePublicKeys = require('./handlers/comparePublicKeys');

// Main CLI function
async function main() {
  while (true) {
    try {
      // const operation = await getInput('Choose an operation (1: keygen, 2: encrypt, 3: decrypt, 4: keyexchange, 5: print public key, 6: compare public keys, 7: exit): ');
      const operation = await getInput('Choose an operation:\n1) keygen\n2) encrypt\n3) decrypt\n4: keyexchange\n5) print public key\n6) compare public keys\n7) exit\n');

      switch (operation.toLowerCase()) {
        case '1':
        case 'keygen':
          const result = await handleKeyGen();
          if (result === 'main') continue; // Return to main menu
          break;
        case '2':
        case 'encrypt':
          console.log('Encryption functionality is not yet implemented.');
          break;
        case '3':
        case 'decrypt':
          console.log('Decryption functionality is not yet implemented.');
          break;
        case '4':
        case 'keyexchange':
          console.log('Key exchange functionality is not yet implemented.');
          break;
        case '5':
        case 'print public key':
          await printPublicKey();
          break;
        case '6':
        case 'compare public keys':
          await comparePublicKeys();
          break;
        case '7':
        case 'exit':
          console.log('Exiting the CLI tool. Goodbye!');
          process.exit(0); // Exit the process
          break;
        default:
          console.error('Invalid operation. Please choose from 1, 2, 3, 4, 5, 6, or 7.');
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }
}

main();
