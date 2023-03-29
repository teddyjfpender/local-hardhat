import { HardhatRuntimeEnvironment } from "hardhat/types";

const hre: HardhatRuntimeEnvironment = require("hardhat");
const contractName = "Game4";

async function main(): Promise<void> {
    // Create factory object
    const Contract = await hre.ethers.getContractFactory(contractName);

    // deploy an instance of the contract
    const deployed = await Contract.deploy();
    const contractAddress = deployed.address;

    // make connection with the deployed contract
    const contract = await hre.ethers.getContractAt(contractName, contractAddress);

    // we know y = 210 and we want x + y to equal 10 which means that when we
    // add two uint8s together and their sum is more than 255 we are also
    // returned an element in the set {0...255}. This means x = 56
    const x = 56;
    const winTx = await contract.win(56)
    const winTxReceipt = await winTx.wait();
    console.log(winTxReceipt);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})