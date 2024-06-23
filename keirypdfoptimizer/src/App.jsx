import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Configurations from './components/Configurations';
import Ghostscript from './components/Ghostscript';
import SobreNosotros from './components/SobreNosotros';
import Footer from './components/Footer';
import './index.css'; // Importa el archivo CSS

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configurations" element={<Configurations />} />
          <Route path="/ghostscript" element={<Ghostscript />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
        </Routes>
      </div> 
  <Footer />
    </Router>
  );
};


export default App;
