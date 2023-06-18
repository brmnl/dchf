const DCHFToken = artifacts.require("DCHFToken");

module.exports = function (deployer) {
  deployer.deploy(DCHFToken, 1000000); 
};