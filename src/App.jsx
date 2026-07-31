import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ChatWidget from "./components/ChatWidget";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import c40anos from "./assets/40candi.jpeg";
import Productos from "./pages/Productos";
import Chamarra from "./pages/Chamarra";
import Chaleco from "./pages/Chaleco";
import Pantalon from "./pages/Pantalon";
import Shorts from "./pages/Shorts";
import Falda from "./pages/Falda"
import Sueter from "./pages/Sueter";
import Bata from "./pages/Bata";
import Sudadera from "./pages/Sudadera";
import Playera from "./pages/Playera";
import Mandil from "./pages/Mandil";
import Pants from "./pages/Pants";
import Catalogo from "./pages/Catalogo";
import { FiArrowRight, FiStar } from "react-icons/fi";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-content">
          <nav className="var">
            <Navbar />
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <header className="hero-section">
                  <div className="hero-content">
                    <div className="hero-badge">
                      <FiStar className="badge-icon" />
                      <span>40 Años de Excelencia</span>
                    </div>
                    
                    <h1 className="hero-title">
                      Uniformes que <span className="gradient-text">Inspiran</span>
                    </h1>
                    
                    <p className="hero-subtitle">
                      Descubre nuestra colección premium de uniformes diseñados para destacar
                    </p>

                    <div className="hero-logo-wrapper">
                      <img
                        src={c40anos}
                        alt="40 años Candi"
                        className="hero-logo"
                      />
                    </div>

                    <div className="hero-cta">
                      <a href="/productos" className="cta-button primary">
                        Ver Colección
                        <FiArrowRight className="cta-icon" />
                      </a>
                      <a href="/catalogo" className="cta-button secondary">
                        Ver Catálogo
                      </a>
                    </div>
                  </div>

                  <div className="hero-scroll-indicator">
                    <div className="scroll-dot"></div>
                    <div className="scroll-dot"></div>
                    <div className="scroll-dot"></div>
                  </div>
                </header>
              }
            />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/1" element={<Chamarra />} />
            <Route path="/productos/2" element={<Chaleco />} />
            <Route path="/productos/3" element={<Pantalon />} />
            <Route path="/productos/4" element={<Shorts />} />
            <Route path="/productos/6" element={<Pants />} />
            <Route path="/productos/7" element={<Falda />} />
            <Route path="/productos/8" element={<Sueter />} />
            <Route path="/productos/9" element={<Bata />} />
            <Route path="/productos/10" element={<Sudadera />} />
            <Route path="/productos/11" element={<Playera />} />
            <Route path="/productos/12" element={<Mandil />} />

          </Routes>
        </div>

        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
