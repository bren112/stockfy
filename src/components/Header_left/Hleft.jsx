import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './hleft.css';

const Hleft = ({ menuType }) => {
  const location = useLocation();

  const produtos = ['teste', 'cadastro', 'cadastrados'];
  const numeros = ['1', '2', '3'];
  const ia = ['Recomendações'];

  let links;
  if (menuType === 'numeros') {
    links = numeros;
  } else if (menuType === 'produtos') {
    links = produtos;
  } else {
    links = ia;
  }

  return (
    <aside className="side-header">
      <h2>Menu</h2>
      <ul>
        {links.map((item) => {
          const path = `/${item.toLowerCase()}`;
          const isActive = location.pathname === path;

          return (
            <li key={item}>
              <Link to={path} className={isActive ? 'active' : ''}>
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Hleft;
