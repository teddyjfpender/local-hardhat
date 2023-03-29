import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const hre: HardhatRuntimeEnvironment = require("hardhat");
const contractName = "Game1";


async function main(): Promise<void> {
  // Retrieve the Contract Factory for the Game contract using the Hardhat Runtime Environment (HRE) library
  const Game = await hre.ethers.getContractFactory(contractName)

  // Deploy an instance of this contract
  const deployment = await Game.deploy();
  const contractAddress = deployment.address; 

  // Concent to contract
  const game = await hre.ethers.getContractAt(contractName, contractAddress);
  // Call win function
  const txWin = await game.win();
  // Check the receipt to see if you won
  const receipt = await txWin.wait();
  console.log(receipt);
  
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
