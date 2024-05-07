import React, {useState, useEffect} from 'react';
import gsap from 'gsap';

const Overlay = ({menuAbierto, toggleMenu}) =>{

    return(
        <div className={`m-overlay ${menuAbierto ? 'active' : ''}`} onClick={toggleMenu}>
        </div>
    );
}

export default Overlay;