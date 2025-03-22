import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NFTSection from './components/NFTSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-black'>
    <Header />
    <NFTSection />
    </div>
  )
}

export default App
