import { ethers } from "hardhat";

async function main() {
  const name = process.env.TOKEN_NAME || "MelOrchid Token";
  const symbol = process.env.TOKEN_SYMBOL || "MOAI";
  const supplyStr = process.env.TOKEN_SUPPLY || "1000000";
  const supply = ethers.parseUnits(supplyStr, 18);

  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy(name, symbol, supply);
  await token.waitForDeployment();

  const addr = await token.getAddress();
  console.log(`Token deployed at: ${addr}`);
  console.log(`Name=${await token.name()} Symbol=${await token.symbol()} Supply=${await token.totalSupply()}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
