import { useEffect, useState } from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'
import Navbar from './components/Navbar';
import Header from './components/Header';
import SecHorizontal from './components/SecHorizontal';
import SectionSkills from './components/SectionSkills';
function App() {
    const [negativeMenu, setNegativeMenu] = useState(false);

    return (
        <ReactLenis root>
            <div className='l-container'>
                <Navbar negativeMenu = {negativeMenu}/>
                <Header/>     
                <SecHorizontal 
                    toggleNegativeMenu={ setNegativeMenu} 
                />
                <SectionSkills/>
            </div>
        </ReactLenis>
    )
}

export default App
