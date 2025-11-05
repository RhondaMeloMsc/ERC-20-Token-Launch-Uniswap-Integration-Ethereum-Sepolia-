ERC-20 Token Launch & Uniswap Integration (Ethereum Sepolia)

Developed and launched a custom ERC-20 token on the Ethereum Sepolia testnet using Hardhat + TypeScript.
Wrote and deployed Solidity smart contracts, configured Uniswap V2/V3 liquidity pools, and verified the token on Etherscan.
Demonstrated end-to-end DeFi deployment skills — from token design to decentralized exchange listing and live trading simulation.

OVERVIEW

This project demonstrates how to:

Write and deploy a Solidity ERC-20 token using Hardhat

Configure and verify contracts on the Ethereum Sepolia testnet

Add liquidity to Uniswap V2 or V3 pools for decentralized trading

Simulate a complete token lifecycle in a real EVM environment

It was built as a hands-on lab to showcase blockchain engineering, DeFi mechanics, and smart contract automation.

FEATURES

Solidity-based ERC-20 contract (custom name, symbol, and supply)

Hardhat + TypeScript configuration (local + Sepolia networks)

Automated deployment and verification scripts

Uniswap V2 and V3 liquidity provisioning examples

Unit tests (minting, transfer, allowances)

Clean .env configuration template

MIT license and structured project layout

TECH STACK

Smart Contracts: Solidity (0.8.x)
Framework: Hardhat + TypeScript
DeFi Integration: Uniswap V2 & V3
Network: Ethereum Sepolia Testnet
Libraries: ethers.js, dotenv

INSTALLATION

Clone the repository
git clone https://github.com/
<your-username>/erc20-uniswap-integration-ethereum-sepolia.git

Move into the directory
cd erc20-uniswap-integration-ethereum-sepolia

Install dependencies
npm install

Copy environment variables
cp .env.example .env

Edit .env
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_KEY

PRIVATE_KEY=0xYOUR_PRIVATE_KEY
TOKEN_NAME=MelOrchid Token
TOKEN_SYMBOL=MOAI
TOKEN_SUPPLY=1000000

DEPLOYMENT

Compile & Deploy to Sepolia:
npm run build
npm run deploy:sepolia

Copy the printed TOKEN_ADDRESS into .env, then verify (optional):
npm run verify:sepolia

ADD LIQUIDITY

Option A — Uniswap V2
Set in .env:
UNISWAP_V2_ROUTER=
WETH_ADDRESS=

Then run:
npm run addlp:v2:sepolia

Option B — Uniswap V3
Set in .env:
UNISWAP_V3_POSITION_MANAGER=
WETH9_ADDRESS=
FEE_TIER=3000

Then run:
npm run addlp:v3:sepolia

TESTING

Run local tests:
npm test

Verifies:

Correct total supply minting to deployer

Successful token transfers and balances

LOCAL DEVELOPMENT

Start a local Hardhat node:
npx hardhat node
npm run deploy:local

You can fork mainnet or Sepolia for realistic simulations.

SAFETY NOTES

Never commit your real PRIVATE_KEY or .env file

Use testnets only (Sepolia, not mainnet)

Review Uniswap router addresses and fee tiers before running scripts

EXAMPLE WORKFLOW

Deploy ERC-20 token → note address

Verify contract on Etherscan

Configure Uniswap variables

Add liquidity (V2 or V3)

View pool on testnet Uniswap interface

ROADMAP

Automate liquidity pool verification

Add price oracle integration

Include dashboard for token tracking

Extend support to Polygon and Avalanche testnets

LICENSE

MIT © 2025

AUTHOR

Rhonda Melo / MelOrchid
Pioneering generative AI for compliance, blockchain, and digital identity — exploring creativity and code as parallel systems.
LinkedIn: https://www.linkedin.com/in/rhonda-melo/

#Ethereum #Uniswap #Solidity #DeFi #SmartContracts #Hardhat #BlockchainDevelopment
