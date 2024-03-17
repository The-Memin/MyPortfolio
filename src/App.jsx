import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import SecHorizontal from './components/SecHorizontal';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='l-container'>
     <Navbar/>
     <Header/>
     <SecHorizontal/>
    </div>
  )
}

export default App
