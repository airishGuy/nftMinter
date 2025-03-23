import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NFTSection from './components/NFTSection'

function App() {
  const [myNftStatus, setMyNftStatus] = useState(false)

  return (
    <div className='text-black'>
    <Header setMyNftStatus={setMyNftStatus}/>
    <NFTSection myNftStatus={myNftStatus} setMyNftStatus={setMyNftStatus} />
    </div>
  )
}

export default App
