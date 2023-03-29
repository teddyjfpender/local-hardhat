//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "hardhat/console.sol";

contract Game5 {
  mapping(address => uint) balances;
  mapping(address => uint) allowances;

  function giveMeAllowance(uint allowance) external {
    allowances[msg.sender] += allowance;
  }

  function mint(uint amount) external {
    allowances[msg.sender] -= amount;
    balances[msg.sender] += amount;
  }

  event Winner(address winner);

  function win() public {
    console.log("The balance is:", balances[msg.sender]);
    require(balances[msg.sender] >= 10000);
    emit Winner(msg.sender);
  }
}