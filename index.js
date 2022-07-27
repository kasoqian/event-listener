import { ethers, Contract, utils } from "ethers";
import { usdtABI, usdtAddress } from "./coins/usdt.js";

/* (async () => {
  const a = await provider.getNetwork();
  console.log(a);
})(); */

function main() {
  const provider = new ethers.getDefaultProvider("mainnet", {
    etherscan: process.env.EVM_KEY,
  });
  const contract = new Contract(usdtAddress, usdtABI, provider);

  contract.on("Transfer", (form, to, value, event) => {
    let _value = `$${value.toNumber() / 1000000} `;
    let result = { form, to, value: _value };
    console.log(`${result.form},${result.to},${result.value}`);
  });
}

main();

/* const topicSets = [
  utils.id(
    "Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
  ),
  null,
  null,
];

const contract = new Contract(tokenAddress, abi, provider);

// List all token transfers *from* myAddress
/* contract.filters.Transfer(null); */
/* await provider.on("data", tx => {
  console.log(tx);
}); */
