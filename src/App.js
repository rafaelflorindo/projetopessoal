import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './Components/Header';
import Menu from './Components/Menu';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Disciplinas from './Pages/Disciplinas';
import Projetos from './Pages/Projetos';
import Publicacoes from './Pages/Publicacoes'
import Materiais from './Pages/Materiais';
import Contato from './Pages/Contato';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mim" element={<About />} />
          <Route path="/disciplinas" element={<Disciplinas />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/publicacoes" element={<Publicacoes />} />
          <Route path="/material-didatico" element={<Materiais />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
