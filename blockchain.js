const Block = require("./block");
const cryptoHash = require("./crypto-hash");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data,
    });

    this.chain.push(newBlock);
  }

  static isValidChain(chain) {
    // como no JS dois objects nunca serão iguais, usando o operador "===", mesmo se tiverem as mesmas key-value-pairs, estamos passando para string o object para podermos realizar essa comparação
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      return false;
    }

    // estamos começando no index 1 pois o index 0 já foi validado no código anterior que checa o genesis block
    for (let i = 1; i < chain.length; i++) {
      // destructuring the current block
      const { timestamp, lastHash, hash, data } = chain[i];

      const actualLastHash = chain[i - 1].hash;

      if (lastHash !== actualLastHash) return false;

      const validatedHash = cryptoHash(timestamp, lastHash, data);

      if (hash !== validatedHash) return false;
    }

    return true;
  }
}

module.exports = Blockchain;
