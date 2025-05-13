import React from 'react';
import { Link } from 'react-router-dom';
import './hleft.css';

const Hleft = ({ menuType }) => {
  const produtos = ['teste', 'cadastro', 'cadastrados'];
  const numeros = ['1', '2', '3'];
  const links = menuType === 'numeros' ? numeros : produtos;

  return (
    <aside className="side-header">
      <h2>Menu</h2>
      <ul>
        {links.map((item) => (
          <li key={item}>
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Hleft;
