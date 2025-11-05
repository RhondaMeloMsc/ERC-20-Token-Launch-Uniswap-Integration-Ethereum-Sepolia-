# 🚀 ERC-20 Launch + Uniswap Integration (Hardhat, TypeScript)

This repo shows the **full lifecycle**: deploy an **ERC-20** token to **Sepolia testnet** (or local Hardhat), then **add liquidity on Uniswap** (V2 or V3) using configurable addresses.

> **Recommended mode:** *Sepolia testnet-ready*. You keep keys private via `.env` and can link real Etherscan transactions in your LinkedIn/GitHub.

---

## What you get
- ✅ Solidity **ERC-20** contract (mint to deployer)
- ✅ **Hardhat + TypeScript** toolchain
- ✅ Deploy + verify scripts
- ✅ **Uniswap V2** and **V3** liquidity scripts (address-configurable)
- ✅ Unit tests
- ✅ Clean README, MIT license, `.env.example`

---

## Quickstart

```bash
npm install
cp .env.example .env
# Edit .env: SEPOLIA_RPC_URL, PRIVATE_KEY, TOKEN_* and (optionally) Uniswap addresses
npm run build
npm run deploy:sepolia
```

**Output:** contract address is printed after deployment.

To verify on Etherscan (optional):
```bash
# set TOKEN_ADDRESS in .env with the printed address
npm run verify:sepolia
```

---

## Add Liquidity

### Option A — Uniswap V2 (pair with ETH)
Requires `UNISWAP_V2_ROUTER` and `WETH_ADDRESS` to be set in `.env` for your network.
```bash
# set TOKEN_ADDRESS in .env first
npm run addlp:v2:sepolia
```

### Option B — Uniswap V3 (concentrated liquidity)
Requires `UNISWAP_V3_POSITION_MANAGER`, `WETH9_ADDRESS`, `FEE_TIER`.
```bash
# set TOKEN_ADDRESS in .env first
npm run addlp:v3:sepolia
```

> **Note:** On Sepolia, Uniswap deployments may vary. You can use community deployments or your own test deployments. This repo abstracts addresses via `.env` so you control what contracts you target.

---

## Local Development
```bash
npx hardhat node    # start local chain
npm run deploy:local
# Advanced: deploy or mock Uniswap locally, or mainnet-fork for real addresses
```

---

## Safety
- Never commit your real **PRIVATE_KEY** or **.env**
- Use testnets (Sepolia) and small amounts
- Review scripts before running and confirm addresses

---

## LinkedIn-ready description (short)
Launched an ERC‑20 token on Ethereum (Sepolia) with Hardhat and added liquidity on Uniswap. Built Solidity contracts, deployment/verification scripts, and liquidity provisioning flows (V2/V3). Demonstrates full token lifecycle from deploy → pool setup → trade.

---

## License
MIT © 2025
