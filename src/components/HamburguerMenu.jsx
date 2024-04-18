import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
const HambuerguerMenu = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };
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
        <div className={`m-menu-hamburguer icono-hamburguesa ${menuAbierto ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="m-menu-hamburguer__line m-menu-hamburguer__line--left"></div>
            <div className="m-menu-hamburguer__line m-menu-hamburguer__line--mid"></div>
            <div className="m-menu-hamburguer__line m-menu-hamburguer__line--right"></div>
        </div>

      {/* Menú */}
        <div className={`m-menu p-8 ${menuAbierto ? 'active' : ''}`} >
            <ul className='m-menu__ul'>
                <li className='m-menu__ul__li'><a href="#">Home</a></li>
                <li className='m-menu__ul__li'><a href="#">About me</a></li>
                <li className='m-menu__ul__li'><a href="">Skills</a></li>
                <li className='m-menu__ul__li'><a href="">Experience</a></li>
                <li className='m-menu__ul__li'><a href="">Contact</a></li>
            </ul>
        </div>
    </div>
  );
};

export default HambuerguerMenu;
