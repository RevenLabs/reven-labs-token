const hre = require("hardhat");

async function main() {
    const initialSupply = hre.ethers.utils.parseUnits("1000000", 18); // 1 million tokens
    const RevenLabsToken = await hre.ethers.getContractFactory("RevenLabsToken");
    const token = await RevenLabsToken.deploy(initialSupply);
    await token.deployed();

    console.log(`Reven Labs Token deployed to: ${token.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
