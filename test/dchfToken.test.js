const DCHFToken = artifacts.require("DCHFToken");

contract("DCHFToken", (accounts) => {
  let tokenInstance;

  before(async () => {
    tokenInstance = await DCHFToken.deployed();
  });

  it("should have correct token name and symbol", async () => {
    const name = await tokenInstance.name();
    assert.equal(name, "Digital Swiss Franc", "Token name is incorrect");

    const symbol = await tokenInstance.symbol();
    assert.equal(symbol, "DCHF", "Token symbol is incorrect");
  });

  it("should have correct initial supply", async () => {
    const totalSupply = await tokenInstance.totalSupply();
    assert.equal(totalSupply.toNumber(), 1000000, "Total supply is incorrect");
  });

  it("should transfer tokens between accounts", async () => {
    const sender = accounts[0];
    const receiver = accounts[1];
    const amount = 100;

    const senderBalanceBefore = await tokenInstance.balanceOf(sender);
    const receiverBalanceBefore = await tokenInstance.balanceOf(receiver);

    await tokenInstance.transfer(receiver, amount, { from: sender });

    const senderBalanceAfter = await tokenInstance.balanceOf(sender);
    const receiverBalanceAfter = await tokenInstance.balanceOf(receiver);

    assert.equal(
      senderBalanceAfter.toNumber(),
      senderBalanceBefore.toNumber() - amount,
      "Sender balance is incorrect"
    );

    assert.equal(
      receiverBalanceAfter.toNumber(),
      receiverBalanceBefore.toNumber() + amount,
      "Receiver balance is incorrect"
    );
  });
});