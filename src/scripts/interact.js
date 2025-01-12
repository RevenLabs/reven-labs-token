const { ethers } = require("ethers");

async function getBalance(contract, address) {
    const balance = await contract.balanceOf(address);
    console.log(`Balance of ${address}: ${ethers.utils.formatUnits(balance, 18)} RLT`);
}

module.exports = { getBalance };
