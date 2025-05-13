import React from 'react';
import './htop.css';

const HeaderTop = ({ setMenuType }) => {
  return (
    <header className="top-header">
      <div>
      <h1>Stockfy <span>IA</span></h1>
      </div>
      <div className='escolhas'>
      <button onClick={() => setMenuType('produtos')}>Produtos</button>
      <button onClick={() => setMenuType('numeros')}>Números</button>
      <button onClick={() => setMenuType('ia')}>🤖- IA</button>
      </div>
    </header>
  );
};

export default HeaderTop;
