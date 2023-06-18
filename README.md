# Digital Swiss Franc (DCHF) ERC-20 Token

This is a prototype Digital Swiss Franc (DCHF) token based on ERC-20 standards that can be deployed to the Ethereum network. 

### How to deploy and test the token on a local development network

1. Run a local Ethereum development network using Truffle or Ganache
2. Configure the network in truffle-config.js
3. Compile the contract
```
truffle compile
```
4. Deploy the contract
```
truffle migrate --network development 
```
5. Run Tests
```
truffle test --network development
```

### Example Output Deployment

```

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


20230618_deploy_dchf_token.js
=============================

   Deploying 'DCHFToken'
   ---------------------
   > transaction hash:    0xf88fd265ad0286f970bfdba4548cee650bf3397fde024fd2fecb401d3533c325
   > Blocks: 0            Seconds: 24
   > contract address:    0xc352a8214644F89381A9B4BdaDfa1113f0A222Ea
   > block number:        18
   > block timestamp:     1687080383
   > account:             0x1B12bcc7CFBa18A35d9EB3D829061a6530B4cC97
   > balance:             99.97502348
   > gas used:            1248826 (0x130e3a)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02497652 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:          0.02497652 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.02497652 ETH

```

### Example Output Tests

```
Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


  Contract: DCHFToken
    ✔ should have correct token name and symbol (46ms)
    ✔ should have correct initial supply
    ✔ should transfer tokens between accounts (30216ms)


  3 passing (30s)
```
