import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.jpg";
import Navbar from "./components/Navbar";
import EnConstruccion from "./components/EnConstruccion";
import Carousel from "./components/Carousel";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Mosaico from "./components/Mosaico";
import c40anos from "./assets/40años.jpeg";
import Productos from "./pages/Productos";
import Chamarra from "./pages/Chamarra";
import Chaleco from "./pages/Chaleco";
import Uniforme from "./pages/Uniforme";
import Puno from "./pages/Puno";
import Otro from "./pages/Otro";

function App() {
  const [showNosotros, setShowNosotros] = useState(false);

  const handleLogoClick = () => setShowNosotros(true);
  const handleClose = () => setShowNosotros(false);

  return (
    <Router>
      <div className="contenedor">
        {/* Logo removed as per previous request */}
      </div>

      <div className="App">
        <nav className="var">
          <Navbar />
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <header className="cuarentaAnios">
                <button
                  onClick={handleLogoClick}
                  className="logo-40anos-btn"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    outline: "none",
                    display: "block",
                    margin: "0 auto 60px auto",
                  }}
                  aria-label="Mostrar información de Nosotros"
                >
                  <img
                    src={c40anos}
                    alt="40 años"
                    style={{
                      width: "320px",
                      height: "320px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                      border: "8px solid #fff",
                      background: "#fff",
                    }}
                  />
                </button>

                {showNosotros && (
                  <div className="popup-overlay" onClick={handleClose}>
                    <div
                      className="popup-modal"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button onClick={handleClose} aria-label="Cerrar">
                        ×
                      </button>
                      <Nosotros />
                    </div>
                  </div>
                )}
                <div className="innovative-video-wrapper">
                  <iframe
                    src="https://player.mux.com/sOeilQisnfyn2I4adlUglkOC89xkmZlW2oSH1jDgIXY?metadata-video-title=Videocandi&autoplay=1"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Videocandi"
                    style={{
                      width: "100%",
                      minHeight: "420px",
                      aspectRatio: "16/9",
                      border: "none",
                      borderRadius: "0",
                      display: "block",
                      margin: "0 auto"
                    }}
                  />
                </div>
              </header>
            }
          />
          <Route path="/en-construccion" element={<EnConstruccion />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/1" element={<Chamarra />} />
          <Route path="/productos/2" element={<Chaleco />} />
          <Route path="/productos/3" element={<Uniforme />} />
          <Route path="/productos/4" element={<Puno />} />
          <Route path="/productos/5" element={<Otro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
