import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/configurations">Configuraciones</Link></li>
          <li><Link to="/ghostscript">Ghostscript</Link></li>
          <li><Link to="/SobreNosotros">Sobre Nosotros</Link></li>
        </ul>
      </nav> 
    </header>
    
  );
};

export default Header;
