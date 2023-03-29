import { HardhatRuntimeEnvironment } from "hardhat/types";

const hre: HardhatRuntimeEnvironment = require("hardhat");
const contractName = "Game3";

async function main(): Promise<void> {
    // Create contract factory object
    const Game = await hre.ethers.getContractFactory(contractName);

    // Deploy an instance of the factory
    const deployed = await Game.deploy();
    const contractAddress = deployed.address;

    // make a connection with the contract
    const game = await hre.ethers.getContractAt(contractName, contractAddress);

    // We know y = 210 and the sum of x + y must equal 255
    // call win and pass x as 45
    const x = 45;
    const callWinTx = await game.win(x);
    const callWinTxReceipt = await callWinTx.wait();
    console.log(callWinTxReceipt)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})