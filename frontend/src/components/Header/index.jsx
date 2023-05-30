import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header>
      <h1 className="header-title">
        <a href="/">Biopark</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="/building/store">Adicionar Edifício</a>
          </li>
          <li>
            <a href="/apartments">Apartamentos disponíveis</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
