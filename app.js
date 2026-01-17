import { getBlockInfo, getAddressBalance } from "./explorer.js";

document.getElementById("blockBtn").onclick = async () => {
  const block = document.getElementById("blockInput").value;
  const info = await getBlockInfo(block);
  document.getElementById("output").innerText = JSON.stringify(info, null, 2);
};

document.getElementById("addressBtn").onclick = async () => {
  const address = document.getElementById("addressInput").value;
  const balance = await getAddressBalance(address);
  document.getElementById("output").innerText = "Balance: " + balance;
};
