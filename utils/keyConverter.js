function pemToHex(pem) {
  // Implement the conversion from PEM to Hex
  const lines = pem.split('\n');
  const encoded = lines.slice(1, lines.length - 1).join('');
  const hex = Buffer.from(encoded, 'base64').toString('hex');
  return hex;
}

function hexToPem(hex) {
  // Implement the conversion from Hex to PEM
  const base64 = Buffer.from(hex, 'hex').toString('base64');
  const lines = [];
  for (let i = 0; i < base64.length; i += 64) {
    lines.push(base64.substring(i, i + 64));
  }
  return `-----BEGIN PUBLIC KEY-----\n${lines.join('\n')}\n-----END PUBLIC KEY-----`;
}

module.exports = { pemToHex, hexToPem };
