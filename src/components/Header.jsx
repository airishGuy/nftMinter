import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Brand Name */}
      <h1 className="text-2xl font-bold text-gray-800">TeaWorld</h1>

      {/* Connect Wallet Button */}

      <div>
            <button className='text-white'>My NFTs</button>
            <button className="ml-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
              Connect Wallet
            </button>
      </div>

    </header>
  )
}

export default Header;