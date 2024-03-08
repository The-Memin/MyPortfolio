import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='l-container'>
     <Navbar/>
     <Header/>
    </div>
  )
}

export default App
