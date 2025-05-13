import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
    return (
        <footer>
  <div id="footer-container">
    <div class="footer-section">
      <h3>Menu</h3>
      <ul>
      <li><Link to="/" >Início</Link></li>
        <li><Link to="/sobre-mim" >Sobre Mim</Link></li>
        <li><Link to="/disciplinas" >Disciplinas</Link></li>
        <li><Link to="/projetos" >Projetos</Link></li>
        <li><Link to="/publicacoes" >Publicações</Link></li>
        <li><Link to="/material-didatico" >Material Didático</Link></li>
        <li><Link to="/contato" >Contato</Link></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Contato</h3>
      <p>Endereço: Rua xxxxxxxxxxxxxxxxxxx</p>
      <p>Telefone: (44) 98401-4320</p>
      <p>Email: rafael.alvesflorindo@gmail.com</p>
    </div>
    <div class="footer-section social">
      <h3>Redes Sociais</h3>
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
      <a href="#">Lattes</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2025 Todos os direitos reservados</p>
  </div>
</footer>

    );
};

export default Footer;
