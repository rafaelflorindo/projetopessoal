import { Link } from 'react-router-dom';
import './style.css'

const Menu = () => {
  return (
    <nav>
      <ul>
      <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre-mim">Sobre Mim</Link></li>
        <li><Link to="/disciplinas">Disciplinas</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/publicacoes">Publicações</Link></li>
        <li><Link to="/material-didatico">Material Didático</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
