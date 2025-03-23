import React from 'react'

const Header = ({setMyNftStatus}) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Brand Name */}
      <h1 className="text-2xl font-bold text-gray-800">TeaWorld</h1>

      {/* Connect Wallet Button */}

      <div>
            <button className='text-white' onClick={() => setMyNftStatus(false)}>Mint NFT</button>
            <button className='ml-4 text-white' onClick={() => setMyNftStatus(true)}>My NFTs</button>
            <button className="ml-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
              Connect Wallet
            </button>
      </div>

    </header>
  )
}

export default Header;