import { ethers } from "hardhat";
import dotenv from "dotenv";
import PM_ABI from "./abis/INonfungiblePositionManager.json" assert { type: "json" };

dotenv.config();

/**
 * This script adds a basic concentrated liquidity position on Uniswap V3
 * via the NonfungiblePositionManager. You need to set:
 *  - UNISWAP_V3_POSITION_MANAGER
 *  - WETH9_ADDRESS
 *  - TOKEN_ADDRESS
 *  - FEE_TIER (500, 3000, or 10000)
 *
 * Note: For testnets, ensure these contracts exist and are initialized.
 */
async function main() {
  const pm = process.env.UNISWAP_V3_POSITION_MANAGER;
  const tokenA = process.env.TOKEN_ADDRESS;
  const tokenB = process.env.WETH9_ADDRESS;
  const fee = Number(process.env.FEE_TIER || "3000");

  if (!pm || !tokenA || !tokenB) {
    throw new Error("Set UNISWAP_V3_POSITION_MANAGER, TOKEN_ADDRESS, WETH9_ADDRESS, FEE_TIER");
  }

  const [signer] = await ethers.getSigners();
  const token = await ethers.getContractAt("Token", tokenA);
  const amountA = ethers.parseUnits("1000", 18);
  const amountB = ethers.parseEther("0.05");

  // Approve manager
  console.log("Approving position manager...");
  await (await token.approve(pm, amountA)).wait();

  const manager = new ethers.Contract(pm, PM_ABI, signer);

  // Simple wide range ticks for demo (not computing sqrtPrice or ticks deterministically here).
  const tickLower = -887220; // min
  const tickUpper =  887220; // max
  const deadline = Math.floor(Date.now()/1000) + 1800;

  console.log("Minting V3 position...");
  const tx = await manager.mint(
    [tokenA, tokenB, fee, tickLower, tickUpper, amountA, amountB, 0, 0, signer.address, deadline],
    { value: amountB }
  );
  const receipt = await tx.wait();
  console.log("V3 liquidity added. Receipt:", receipt?.hash);
}

main().catch((e) => { console.error(e); process.exit(1); });
