import { ethers, Contract, utils } from "ethers";
import { usdtABI, usdtAddress } from "./coins/usdt.js";

function main() {
  const provider = new ethers.getDefaultProvider("rinkeby", {
    etherscan: process.env.EVM_KEY,
  });
  const contract = new Contract(usdtAddress, usdtABI, provider);

  contract.on("Transfer", (form, to, value, event) => {
    console.log(form, to, value);
    /*     let _value = `$${value.toNumber() / 1000000} `;
    let result = { form, to, value: _value };
    console.log(`${result.form},${result.to},${result.value}`); */
  });
}

main();
