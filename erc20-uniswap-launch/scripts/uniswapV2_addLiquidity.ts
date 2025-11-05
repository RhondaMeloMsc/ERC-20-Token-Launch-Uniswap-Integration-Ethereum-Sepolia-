import { ethers } from "hardhat";
import dotenv from "dotenv";
import RouterABI from "./abis/UniswapV2Router02.json" assert { type: "json" };

dotenv.config();

/**
 * This script assumes you already deployed your ERC-20 and have its address.
 * You must also set UNISWAP_V2_ROUTER and WETH_ADDRESS in your .env for your target network.
 */
async function main() {
  const tokenAddress = process.env.TOKEN_ADDRESS;
  const routerAddress = process.env.UNISWAP_V2_ROUTER;
  const wethAddress = process.env.WETH_ADDRESS;
  if (!tokenAddress || !routerAddress || !wethAddress) {
    throw new Error("Set TOKEN_ADDRESS, UNISWAP_V2_ROUTER, and WETH_ADDRESS in .env");
  }

  const [signer] = await ethers.getSigners();
  const token = await ethers.getContractAt("Token", tokenAddress);

  // Approve router to move your token
  const amountToken = ethers.parseUnits("1000", 18);
  const amountETH = ethers.parseEther("0.05");

  console.log("Approving router...");
  const approveTx = await token.approve(routerAddress, amountToken);
  await approveTx.wait();

  const router = new ethers.Contract(routerAddress, RouterABI, signer);

  console.log("Adding liquidity (token + ETH)...");
  const deadline = Math.floor(Date.now()/1000) + 1800;

  const tx = await router.addLiquidityETH(
    tokenAddress,
    amountToken,
    0,
    0,
    signer.address,
    deadline,
    { value: amountETH }
  );
  const receipt = await tx.wait();
  console.log("Liquidity added. Receipt:", receipt?.hash);
}

main().catch((e) => { console.error(e); process.exit(1); });
