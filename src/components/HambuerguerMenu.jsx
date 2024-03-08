import React, { useState } from 'react';
import { gsap } from 'gsap';

const MenuHamburguesa = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);

    // Animación con GSAP para el menú
    gsap.to('.m-menu', {
      duration: 0.3,
      height: menuAbierto ? 0 : '100%',
      opacity: menuAbierto ? 0 : 1,
      pointerEvents: menuAbierto ? 'none' : 'auto',
    });

  };

  return (
    <div>
      {/* Icono de hamburguesa */}
        <div className={`m-menu-hamburguer icono-hamburguesa ${menuAbierto ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="m-menu-hamburguer__line m-menu-hamburguer__line--left"></div>
            <div className="m-menu-hamburguer__line m-menu-hamburguer__line--mid"></div>
            <div className="m-menu-hamburguer__line m-menu-hamburguer__line--right"></div>
        </div>

      {/* Menú */}
        <div className="m-menu p-8">
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Contacto</li>
            </ul>
        </div>
    </div>
  );
};

export default MenuHamburguesa;
