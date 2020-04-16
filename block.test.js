const Block = require("./block");

describe("Block", () => {
  const timestamp = "a-date";
  const lastHash = "foo-hash";
  const hash = "bar-hash";
  const data = ["blockchain", "data"];

  const block = new Block({
    timestamp,
    lastHash,
    hash,
    data,
  });

  // https://jestjs.io/docs/en/api.html#testname-fn-timeout
  // test(name, fn, timeout)
  // Also under the alias: it(name, fn, timeout)
  it("has a timestamp, lastHash, hash and data property", () => {
    // obs: it is a best practice to have only one expect fn inside a it/test fn
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
});
