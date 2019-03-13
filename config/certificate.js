const fs = require('fs');

const certificate = {
    key: fs.readFileSync(path.join(__dirname, './certificate/privateKey.key')),
    cert: fs.readFileSync(path.join(__dirname, './certificate/certificate.crt'))
};

module.exports = {
    certificate
};