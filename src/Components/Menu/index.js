import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style.css';

const Menu = () => {
  const [aberto, setAberto] = useState(false);

  const toggleMenu = () => setAberto(!aberto);
  const fecharMenu = () => setAberto(false);

  return (
    <nav>
      <div className="menu-toggle" onClick={toggleMenu}>
      {aberto ? '✖' : '☰'}
      </div>
      <ul className={`menu ${aberto ? 'aberto' : ''}`}>
        <li><Link to="/" onClick={fecharMenu}>Início</Link></li>
        <li><Link to="/sobre-mim" onClick={fecharMenu}>Sobre Mim</Link></li>
        <li><Link to="/disciplinas" onClick={fecharMenu}>Disciplinas</Link></li>
        <li><Link to="/projetos" onClick={fecharMenu}>Projetos</Link></li>
        <li><Link to="/publicacoes" onClick={fecharMenu}>Publicações</Link></li>
        <li><Link to="/material-didatico" onClick={fecharMenu}>Material Didático</Link></li>
        <li><Link to="/contato" onClick={fecharMenu}>Contato</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
