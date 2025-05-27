import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";

import Header from './Components/Header';
import Menu from './Components/Menu';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Disciplinas from './Pages/Disciplinas';
import Projetos from './Pages/Projetos';
import Publicacoes from './Pages/Publicacoes';
import Materiais from './Pages/Materiais';
import Contato from './Pages/Contato';
import CadastroUsuario from './Components/Usuario/Cadastrar';

import Auth from './Components/Usuario/Auth';
import ListarUsuario from './Components/Usuario/Listar'; 
import EditarUsuario from './Components/Usuario/Editar';

function AppContent() {
  const location = useLocation();

  const estaNaPaginaLogin = location.pathname === '/auth';
  const usuario = localStorage.getItem("usuario");

  return (
    <div className="App">
      {!estaNaPaginaLogin && <Header />}
      {!estaNaPaginaLogin && <Menu />}

      <Routes>
        <Route path="/" element={usuario ? <Home /> : <Navigate to="/auth" />} />
        <Route path="/sobre-mim" element={<About />} />
        <Route path="/disciplinas" element={<Disciplinas />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/publicacoes" element={<Publicacoes />} />
        <Route path="/material-didatico" element={<Materiais />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
        <Route path="/editarUsuario" element={<EditarUsuario />} />
        <Route path="/editarUsuario/id/:id" element={<EditarUsuario />} />
        <Route path="/listarUsuarios" element={<ListarUsuario />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      {!estaNaPaginaLogin && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
