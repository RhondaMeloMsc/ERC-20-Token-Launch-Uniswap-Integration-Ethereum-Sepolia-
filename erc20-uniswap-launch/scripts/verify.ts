import { run } from "hardhat";

async function main() {
  const tokenAddress = process.env.TOKEN_ADDRESS;
  const name = process.env.TOKEN_NAME || "MelOrchid Token";
  const symbol = process.env.TOKEN_SYMBOL || "MOAI";
  const supplyStr = process.env.TOKEN_SUPPLY || "1000000";
  const args = [name, symbol, (BigInt(supplyStr) * (10n ** 18n)).toString()];

  if (!tokenAddress) throw new Error("Set TOKEN_ADDRESS in env for verification");
  await run("verify:verify", { address: tokenAddress, constructorArguments: args });
  console.log("Verification submitted");
}

main().catch((e) => { console.error(e); process.exit(1); });
