
import { useState } from "react";

export default function NFTSection({myNftStatus, setMyNftStatus}) {
  const totalSupply = 5000;
  const [minted, setMinted] = useState(0);

  const mintNFT = () => {
    if (minted < totalSupply) {
      setMinted(minted + 1);
    }
  };

  return (
    <div>
        {
            !myNftStatus ? (    <section className="mt-8 flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
                {/* NFT Image */}
                <img
                  src="https://via.placeholder.com/300" // Replace with actual NFT image
                  alt="NFT Preview"
                  className="w-64 h-64 object-cover rounded-lg mb-4"
                />
          
                {/* Minting Info */}
                <h2 className="text-2xl font-bold text-gray-800">Mint Your NFT</h2>
                <p className="text-gray-600">Price: <span className="font-semibold">0 ETH</span></p>
                <p className="text-gray-600">Supply: {minted} / {totalSupply}</p>
          
                {/* Mint Button */}
                <button
                  onClick={mintNFT}
                  disabled={minted >= totalSupply}
                  className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition"
                >
                  {minted >= totalSupply ? "Sold Out" : "Mint NFT"}
                </button>
              </section>) : ""
        }
    

    </div>
  );
}
