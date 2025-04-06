
import { useEffect, useState } from "react";
import { getContract, prepareContractCall } from "thirdweb";
import { client } from "../constants/client";
import { myChain } from "../constants/chain";
import { CA, tokenURI } from "../constants/helper";
import { TransactionButton, useActiveAccount, useReadContract, useSendTransaction } from "thirdweb/react";
import abi from "../constants/abi.json"

export default function NFTSection({myNftStatus}) {
  const totalSupply = 5000;
  const [minted, setMinted] = useState(0);
  const [message, setMessage] = useState("status");
  const [bgc, setBgc] = useState("bg-red-500")
  const [userAddress, setUserAddress] = useState("");

  const account = useActiveAccount();
  const { mutate: sendTx, data: transactionResult } = useSendTransaction();

  

  // get a contract
const contract = getContract({
  client,
  chain: myChain,
  address: CA,
  abi
});


const { data: totalMinted} = useReadContract({
  contract,
  method: "function totalMinted() external view returns (uint256)",
  params: []
});

const { data: tokensOfOwner} = useReadContract({
  contract,
  method: "function tokensOfOwner(address owner) external view returns (uint256[] memory)",
  params: [account?.address]
});

const tokensOfOwnerArray = (tokensOfOwner ?? []).map(Number);




  const mintNFT = async() => {
    console.log("minting pop");
    console.log(contract);
    setBgc("bg-red-500")
    console.log(totalMinted);  
    //////
    if (Number(totalMinted) < totalSupply) {

    console.log({minted: Number(totalMinted)});

    // build metadata with .. bafybeidm3rxf35jyb32nimqa6g4enmxqzve5afgqisfuciw2ivuen2nyem

    setMessage("pin to ipfs")
    const metadata = {
      name: "Tea Verse",
      description: "For the love of tea and blockchain. Tea Verse NFTs bring exclusive rewards, community access, and a sip of innovation to the Web3 world.",
      image: "ipfs://bafybeidm3rxf35jyb32nimqa6g4enmxqzve5afgqisfuciw2ivuen2nyem",
    };
    console.log(metadata);
    const tokenURI_ = await tokenURI(metadata);
    console.log({tokenURI_});

    setMessage("Minting NFT");

    const transaction = prepareContractCall({
      contract,
      method: "function mint(string memory _tokenURI) external",
      params: [tokenURI_],
    });
    sendTx(transaction);
    
    setMinted(Number(totalMinted));
    }
    /////
  };

  useEffect(() => {
    // setMinted to ... read from contract
    setBgc("bg-red-500")
    setMinted(Number(totalMinted));


    if(account) {
      setUserAddress(account.address);
    }

  }, [minted, account, userAddress])

  return (
    <div>
        {
            !myNftStatus 
            ? (   
              <div> 
                {/* <div className={`mt-4 text-center text-white p-4 ${bgc}`}>
                  hello world
                </div> */}
            <section className="mt-8 flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
                {/* NFT Image */}
                <img
                  src="https://ipfs.io/ipfs/bafybeidm3rxf35jyb32nimqa6g4enmxqzve5afgqisfuciw2ivuen2nyem" // Replace with actual NFT image
                  alt="NFT Preview"
                  className="w-64 h-64 object-cover rounded-lg mb-4"
                />
          
                {/* Minting Info */}
                <h2 className="text-2xl font-bold text-gray-800">Mint Your NFT</h2>
                <p className="text-gray-600">Price: <span className="font-semibold">0 ETH</span></p>
                <p className="mb-4 text-gray-600">Supply: {Number(totalMinted)} / {totalSupply}</p>
          
                 
                <TransactionButton
                transaction={() => mintNFT()}
                
                onTransactionConfirmed={() => alert("✅✅ MINTED NFT SUCCESSFULLY ✅✅")}
                >
                {Number(totalMinted) >= totalSupply ? "Sold Out" : "Mint NFT"}
                </TransactionButton>

            </section>
            </div>

              ) 
            : (<div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {tokensOfOwnerArray.map((tokenId, index) => (
                  <div key={index} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
                    <img
                      src="https://ipfs.io/ipfs/bafybeidm3rxf35jyb32nimqa6g4enmxqzve5afgqisfuciw2ivuen2nyem"
                      alt="Tea Verse"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <h3 className="mt-4 text-lg font-bold">Tea Verse</h3>
                    <p className="text-gray-400">Token ID: {tokenId}</p>
                    {/* <p className="text-gray-500 text-sm truncate">Owner: {account.address}</p> */}
                  </div>
                ))}
            </div>


            </div>)
        }
    

    </div>
  );
}
