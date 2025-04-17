import './style.css'
import perfil from './perfilRafael.jpg'

const Header = ()=>{
    return (
        <header>
            <img src={perfil} alt="Foto de perfil de Rafael" className="perfil-img" />
            <h1 className="nome">Rafael Alves Florindo</h1>
        </header>
    );
};

export default Header;