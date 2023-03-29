# Interacting with Cotnracts on Local Network With Hardhat

Interacting with five simple Solidity contracts that all have a `win()` method that can be called if there is some state of arguments specified in the method call.

To try this out, clone this repository and follow these steps:
- `npm install`
- Split the terminal in two
- call `npx hardhat node` in one terminal
- call `npx hardhat run scripts/game*.ts` where `*` is in `{1,2,3,4,5}`