import { Link } from 'react-router-dom';
import './style.css'

const Footer = () => {
    return (
        <footer>
            <div className="footerNavegation">
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/sobre-mim">Sobre Mim</Link></li>
                    <li><Link to="/disciplinas">Disciplinas</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                    <li><Link to="/publicacoes">Publicações</Link></li>
                    <li><Link to="/material-didatico">Material Didático</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </div>

            <div className="footerSocials">
                <a href="https://github.com/rafaelflorindo" target="_blank">GitHub</a>
                <a href="https://linkedin.com/in/rafaelflorindo" target="_blank">LinkedIn</a>
                <a href="http://lattes.cnpq.br/7246554526271622" target="_blank">Lattes</a>
            </div>

            <div className="footerCredits">
                © 2025 Rafael Florindo. Todos os direitos reservados. Desenvolvido com React.
            </div>
        </footer>

    )
}

export default Footer;