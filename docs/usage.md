# Usage Guide for Reven Labs Token

## Deployment
1. Install dependencies: `npm install`.
2. Deploy the contract: `npx hardhat run scripts/deploy.js`.

## Interact with the Token
Use the provided `interact.js` script to fetch balances and interact with the smart contract.

Example:
```javascript
const { getBalance } = require('./src/scripts/interact.js');
await getBalance(contract, "0xYourAddress");
