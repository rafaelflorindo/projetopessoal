import React from 'react';
import './style.css';
import perfil from './perfilRafael.jpg'

const SobreMim = () => {
  return (
    <div className="sobre-mim-container">
      <div className="sobre-mim-imagem">
        <img src={perfil} alt="Minha foto" />
      </div>
      <div className="sobre-mim-texto">
        <h2>Rafael Alves Florindo</h2>
        <p><strong>Formação:</strong> Bacharel em Ciências da Computação - Mestre em Gestão do Conhecimento - Especialista em Desenvolvimento de Sistemas para Internet</p>
        <p><strong>Área de atuação:</strong> Desenvolvimento Full Stack</p>
        <p>
          Sou professor de programação back-End, Front-End, Mobile e Desktop, atualmente trabalho no curso Técnico em Desenvolvimento de Sistemas pela SEED e no curso de Analise e Desenvolvimento de Sistemas pela Faculdade SENAC Maringá
        </p>
      </div>
    </div>
  );
};

export default SobreMim;
