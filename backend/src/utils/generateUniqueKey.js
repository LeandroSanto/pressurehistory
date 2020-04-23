const crypto = require ('crypto');

module.exports = function generateUniqueKey(){
    return crypto.randomBytes(4).toString('HEX');
};