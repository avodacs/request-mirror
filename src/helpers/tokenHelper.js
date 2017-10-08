const crypto = require('crypto');

/**
 * Generates an 8 character hexadecimal token
 *
 * @returns {String}
 */
function generateToken() {
  return crypto.randomBytes(4).toString('hex');
}

module.exports = {
  generateToken
};
