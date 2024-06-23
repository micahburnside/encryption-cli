function pemToHex(pem) {
  const base64 = pem
    .replace('-----BEGIN PUBLIC KEY-----', '')
    .replace('-----END PUBLIC KEY-----', '')
    .replace(/\s+/g, '');
  const buffer = Buffer.from(base64, 'base64');
  return buffer.toString('hex');
}

function hexToPem(hex) {
  const base64 = Buffer.from(hex, 'hex').toString('base64');
  const formattedBase64 = base64.match(/.{1,64}/g).join('\n');
  return `-----BEGIN PUBLIC KEY-----\n${formattedBase64}\n-----END PUBLIC KEY-----`;
}

module.exports = { pemToHex, hexToPem };
