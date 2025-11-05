import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Token", function () {
  async function deploy() {
    const [owner, alice] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy("MelOrchid Token", "MOAI", ethers.parseUnits("1000", 18));
    await token.waitForDeployment();
    return { token, owner, alice };
  }

  it("mints initial supply to deployer", async () => {
    const { token, owner } = await loadFixture(deploy);
    const bal = await token.balanceOf(owner.address);
    expect(bal).to.equal(ethers.parseUnits("1000", 18));
  });

  it("transfers tokens", async () => {
    const { token, owner, alice } = await loadFixture(deploy);
    await (await token.transfer(alice.address, ethers.parseUnits("10", 18))).wait();
    expect(await token.balanceOf(alice.address)).to.equal(ethers.parseUnits("10", 18));
  });
});
