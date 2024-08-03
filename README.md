# Node.js Encryption CLI Tool

## Overview

This Node.js command-line interface (CLI) tool provides key generation, public key printing, and public key comparison functionality. Additional features like encryption, decryption, and key exchange will be implemented in future versions.

### Current Features

	•	Generate cryptographic keys.
	•	Access cyryptographic keys via USB
	•	Choose key format PEM / HEX.
	•	Print the public key.
	•	Compare two keys to see if they match.
	•	User-friendly command-line interface.

### Installation

To install this CLI tool, you need to have Node.js and npm installed on your machine. Follow the steps below to set it up:

1.	Clone the repository:
```shell
git clone https://github.com/yourusername/encryption-cli-tool.git

```
2.	Navigate to the project directory:
```shell
cd encryption-cli-tool
```

3.	Install the dependencies:
```shell
npm install
```

Usage

Once installed, you can use the CLI tool by running the main.js file. Below are the available operations:

### 1. Key Generation

To generate cryptographic keys:
node main.js
Choose ‘1’ or ‘keygen’ from the menu
Enter the paths to save the private and public keys

### 2. Print Public Key

To print the public key:
node main.js
Choose ‘5’ or ‘print public key’ from the menu
Enter the path to the public key
Choose the format (pem or hex) to print the public key

### 3. Compare Public Keys

To compare two public keys:
node main.js
Choose ‘6’ or ‘compare public keys’ from the menu
Enter the paths to the two public keys to be compared

#### Example Session
```shell
node main.js
```

Choose a cryptographic operation by selecting from the main menu options:

	1.	keygen
	2.	encrypt
	3.	decrypt
	4.	keyexchange
	5.	print public key
	6.	compare public keys
	7.	exit

##### 

### Future Development

#### Planned features for future versions include:

	•	Encryption and Decryption: Encrypt and decrypt files and text.
	•	Key Exchange: Implement Diffie Hellman key exchange.
	•	SSH
	•	Raspberry Pi Zero “HSM”
	•	Supported Encryption Algorithms:
	•	AES (Advanced Encryption Standard)
	•	RSA (Rivest–Shamir–Adleman)
	•	ECC (Elliptic-Curve Cryptography)
	•	Key Management:
	•	Key rotation
	•	Key expiration
	•	Secure key storage solutions
	•	Integration with External Services:
	•	Cloud-based key management services (e.g., AWS KMS, Azure Key Vault)
	•	Cross-Platform Compatibility: Ensure the tool works on Windows, macOS, and Linux.
	•	Performance Optimization: Efficiently handle encryption and decryption of large files.


Contributing

Contributions are welcome after I finish 1.0, unless you have a better plan. If you do, or find any issues, feel free to open an issue or create a pull request.

	1.	Fork the repository.
	2.	Create a new branch (git checkout -b feature-branch).
	3.	Make your changes.
	4.	Commit your changes (git commit -am 'Add new feature').
	5.	Push to the branch (git push origin feature-branch).
	6.	Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For any questions or suggestions, please contact micahburnside@protonmail.com.

Thank you for using the Node.js Encryption CLI Tool!
