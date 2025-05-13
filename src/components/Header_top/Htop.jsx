import React from 'react';
import './htop.css';

const HeaderTop = ({ setMenuType }) => {
  return (
    <header className="top-header">
      <button onClick={() => setMenuType('produtos')}>Produtos</button>
      <button onClick={() => setMenuType('numeros')}>Números</button>
    </header>
  );
};

export default HeaderTop;
