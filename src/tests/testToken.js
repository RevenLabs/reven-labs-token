const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RevenLabsToken", function () {
    it("Should deploy the token and assign the total supply to the owner", async function () {
        const [owner] = await ethers.getSigners();
        const RevenLabsToken = await ethers.getContractFactory("RevenLabsToken");
        const token = await RevenLabsToken.deploy(ethers.utils.parseUnits("1000000", 18));
        await token.deployed();

        const ownerBalance = await token.balanceOf(owner.address);
        expect(await token.totalSupply()).to.equal(ownerBalance);
    });
});
