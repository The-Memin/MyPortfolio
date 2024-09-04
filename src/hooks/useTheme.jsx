import { useState, useEffect } from 'react';

const useTheme = () => {
  const [darkMode, setDarkMode] = useState(true); // true para tema oscuro, false para tema claro

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Aplicar clase de fondo al body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark-background', 'text-dark-text');
      document.body.classList.remove('bg-light-background', 'text-light-text');
    } else {
      document.body.classList.add('bg-light-background', 'text-light-text');
      document.body.classList.remove('bg-dark-background', 'text-dark-text');
    }

    // Limpiar clases al desmontar el componente
    return () => {
      document.body.classList.remove('bg-dark-background', 'text-dark-text', 'bg-light-background', 'text-light-text');
    };
  }, [darkMode]);

  return { darkMode, toggleTheme };
};

export default useTheme;
