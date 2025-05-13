import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hleft from './components/Header_left/Hleft';
import HeaderTop from './components/Header_Top/Htop';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Teste from './pages/Home/Teste';
import CadastroProduto from './pages/Produtos/Cadastro/CadastroProduto';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuType, setMenuType] = useState('letras');

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Router>
      <HeaderTop setMenuType={setMenuType} />
      <Hleft menuType={menuType} />
      <div style={{ marginLeft: '200px', marginTop: '60px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/testando" element={<Teste />} />
          <Route path="/cadastro" element={<CadastroProduto />} />
          <Route path="/teste" element={<Home />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
