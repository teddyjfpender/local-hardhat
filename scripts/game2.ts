import { HardhatRuntimeEnvironment } from "hardhat/types";

const hre: HardhatRuntimeEnvironment = require("hardhat");
const contractName = "Game2";

async function main():Promise<void> {
    // Create a factory contract
    const Game = await hre.ethers.getContractFactory(contractName);

    // deploy an instance of that contract
    const deployment = await Game.deploy();
    // get the contract address
    const contractAddress = deployment.address;

    // create a connection with the contract
    const game = await hre.ethers.getContractAt(contractName, contractAddress);

    // Game2 requires us to have x & y greater than zero and their sum to equal 50.
    // set x to 30
    const txSetX = await game.setX(30);
    const txSetXReceipt = await txSetX.wait();
    // set y to 20
    const txSetY = await game.setY(20);
    const txSetYReceipt = await txSetY.wait();

    // call winning function
    const txWin = await game.win();
    // check receipt
    const txWinReceipt = await txWin.wait();
    console.log(txWinReceipt);

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
