const crypto = require("crypto");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
const cryptoHash = (...inputs) => {
  const hash = crypto.createHash("sha256");
  hash.update(inputs.sort().join(" "));
  return hash.digest("hex");
};

module.exports = cryptoHash;
