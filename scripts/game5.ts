import { HardhatRuntimeEnvironment } from "hardhat/types";

const hre: HardhatRuntimeEnvironment = require("hardhat");
const contractName = "Game5";

async function main(): Promise<void> {
    // Create contract factory
    const ContractFactory = await hre.ethers.getContractFactory(contractName);

    // deploy an instance of the contract
    const deployed = await ContractFactory.deploy();
    const contractAddress = await deployed.address;

    // connect to the contract
    const contract = await hre.ethers.getContractAt(contractName, contractAddress);

    // to win:
    // call giveMeAllowance with a parameter of more than 10000
    // call mint with a parameter of more than 10000
    // call win
    const amount = 10000
    const getAllowanceTx = await contract.giveMeAllowance(amount);
    const getAllowanceTxReceipt = await getAllowanceTx.wait()

    const mintTx = await contract.mint(amount);
    const mintTxReceipt = await mintTx.wait();

    const winTx = await contract.win();
    const winTxReceipt = await winTx.wait();
    console.log(winTxReceipt);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})