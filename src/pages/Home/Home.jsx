import React from 'react';
import './Home.css';
import loginImage from '../../assets/Login/background.png';

function Home() {
  return (
    <div className="home-container">
      <img src={loginImage} alt="background" className="background-image" />
      <div className="content-box">
        <div className="content-text">
          <h1>Stockfy <span>IA</span></h1>
          <p>Simplifique o controle e análise de estoque com inteligência artificial.</p>
        </div>
        <div className="content-image">
          <img src={loginImage} alt="visual" />
        </div>
      </div>
    </div>
  );
}

export default Home;
