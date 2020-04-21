const crypto = require("crypto");

// usando o rest operator assim, todos os args serao colocados em um inputs array
const cryptoHash = (...inputs) => {
  const hash = crypto.createHash("sha256");

  hash.update(inputs.sort().join(" "));

  return hash.digest("hex");
};

module.exports = cryptoHash;
