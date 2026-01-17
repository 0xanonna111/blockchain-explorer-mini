import { getProvider } from "./web3.js";

export async function getBlockInfo(blockNumber) {
  const provider = getProvider();
  return await provider.getBlock(blockNumber);
}

export async function getAddressBalance(address) {
  const provider = getProvider();
  const balance = await provider.getBalance(address);
  return balance.toString();
}
