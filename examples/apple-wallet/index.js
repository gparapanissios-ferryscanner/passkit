const { PKPass } = require("passkit-generator");
const fs = require('fs');
const path = require('path');

const generatePass = async () => {
  try {
    // Define paths
    const certsPath = path.join(__dirname, 'certs');
    const passFolderPath = path.join(__dirname, 'model', 'boardingPass.pass');

    // Read certificate contents
    const wwdr = fs.readFileSync(path.join(certsPath, 'WWDR.pem'));
    const signerCert = fs.readFileSync(path.join(certsPath, 'signerCert.pem'));
    const signerKey = fs.readFileSync(path.join(certsPath, 'signerKey.pem'));
    const signerKeyPassphrase = process.env.SIGNER_PASSPHRASE;

    // Initialize the pass from a model folder
    const pass = await PKPass.from({
      model: passFolderPath,
      certificates: {
        wwdr,
        signerCert,
        signerKey,
        signerKeyPassphrase
      }
    });

    // Generate the buffer .pkpass file
    const buffer = pass.getAsBuffer();
    fs.writeFileSync('yourPass.pkpass', buffer);
    console.log('Pass generated successfully');
  } catch (err) {
    console.error('Error generating pass:', err);
  }
};

generatePass();
