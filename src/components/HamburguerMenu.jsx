import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Overlay from './Overlay';
import randomType from '../animations/randomType'
const HamburguerMenu = ({ negativeMenu }) => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const menuOptions = [
        {
            name: 'home',
            link: 'home',
        },
        {
            name: 'projects',
            link: 'projects',
        },
        {
            name: 'skills',
            link: 'skills',
        },
        {
            name: 'experience',
            link: 'experience',
        },
        {
            name:'contact',
            link: 'contact',
        }
    ]
    
    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    const setRandomLabel = (item, text)=>{
        let p = item.closest('li').querySelector('a')
        p.textContent = text;
        //console.log(p)
        randomType(p, '01', 420, true)
    }
    
    useEffect(() => {
        if (menuAbierto) {
            gsap.from('.m-menu__ul__li',
            {
                duration: .4,
                rotationX: 90,
                stagger: .2,
                ease: "power1.inOut",
                delay: .4
            })
        } 
    }, [menuAbierto]);

    return (
        <div className='m-menu-container'>
            {/* Icono de hamburguesa */}
            <div className={`m-menu-hamburguer icono-hamburguesa ${menuAbierto ? 'active' : ''} ${negativeMenu ? 'negative' : ''}`} onClick={toggleMenu}>
            <div className="m-menu-hamburguer__line m-menu-hamburguer__line--left"></div>
            <div className="m-menu-hamburguer__line m-menu-hamburguer__line--mid"></div>
            <div className="m-menu-hamburguer__line m-menu-hamburguer__line--right"></div>
        </div>

      {/* Menú */}
        <div className={`m-menu p-8 ${menuAbierto ? 'active' : ''} ${negativeMenu ? 'negative' : ''}`} >
            <ul className='m-menu__ul'>
                {
                    menuOptions.map((option, index) =>(
                        <li className='m-menu__ul__li' key={index} onMouseOver= {(e)=>setRandomLabel(e.target, option.name)}>
                            <a href={"#"+option.link} onClick={toggleMenu}>
                                {option.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>

        <Overlay menuAbierto={menuAbierto} toggleMenu={toggleMenu}/>
    </div>
  );
};

export default HamburguerMenu;
