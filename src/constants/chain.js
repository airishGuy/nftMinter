import { defineChain } from "thirdweb";

export const myChain = defineChain({
    id: 10218,
    rpc: "https://tea-sepolia.g.alchemy.com/public",
    nativeCurrency: {
        name: "TEA",
        symbol: "TEA",
        decimals: 18,
      },
    
  })
  