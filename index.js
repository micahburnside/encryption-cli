const fs = require('fs');
const getInput = require('./utils/getInput');
const isYes = require('./utils/isYes');

// Main CLI function
async function main() {
  try {
    const operation = await getInput('Choose an operation (1: keygen, 2: encrypt, 3: decrypt, 4: keyexchange, 5: print public key): ');
    const storagePath = await getInput('Enter the path to the external storage (USB drive, SD card, etc.): ');

    if (!fs.existsSync(storagePath)) {
      console.error('Error: The specified storage path does not exist.');
      return;
    }

    switch (operation.toLowerCase()) {
      case '1':
      case 'keygen':
        await handleKeyGen(storagePath);
        break;
      case '2':
      case 'encrypt':
        await handleEncrypt(storagePath);
        break;
      case '3':
      case 'decrypt':
        await handleDecrypt(storagePath);
        break;
      case '4':
      case 'keyexchange':
        await handleKeyExchange(storagePath);
        break;
      case '5':
      case 'print public key':
        await printPublicKey(storagePath);
        break;
      default:
        console.error('Invalid operation. Please choose from 1, 2, 3, 4, or 5.');
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

main();
