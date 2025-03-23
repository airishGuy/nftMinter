import { defineChain } from "thirdweb";


export const myChain = defineChain({
    id: 93384,
    rpc: "https://assam-rpc.tea.xyz",
    nativeCurrency: {
        name: "TEA",
        symbol: "TEA",
        decimals: 18,
      },
    
  })
  