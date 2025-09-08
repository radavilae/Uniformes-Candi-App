import React, { useState } from "react";
import foto1 from "../assets/chamarra/MOD-0003.JPG";
import foto2 from "../assets/chamarra/MOD-004.jpg";
import foto3 from "../assets/chamarra/MOD-0077.jpg";
import foto4 from "../assets/chamarra/MOD-0088.jpg";
import foto5 from "../assets/chamarra/MOD-0094.jpg";
import foto6 from "../assets/chamarra/MOD-0122.jpg";
import foto7 from "../assets/chamarra/MOD-0131.jpg";
import foto8 from "../assets/chamarra/MOD-0151.jpg";
import foto9 from "../assets/chamarra/MOD-0162.jpg";
import foto10 from "../assets/chamarra/MOD-0166.jpg";
import foto11 from "../assets/chamarra/MOD-0175.jpg";
import foto12 from "../assets/chamarra/MOD-0193.jpg";

import { useNavigate } from "react-router-dom";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "32px",
  padding: "40px 0",
  justifyItems: "center",
};

const imgStyle = {
  width: "100%",
  maxWidth: "340px",
  height: "340px",
  objectFit: "cover",
  borderRadius: "18px",
  boxShadow: "0 4px 24px rgba(219,28,124,0.10)",
  cursor: "pointer",
  transition: "transform 0.2s, box-shadow 0.2s",
};

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2000,
  padding: "20px",
};

const modalContentStyle = {
  background: "white",
  borderRadius: "20px",
  padding: "30px",
  maxWidth: "90vw",
  maxHeight: "90vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  position: "relative",
};

const modalImageStyle = {
  maxWidth: "100%",
  maxHeight: "60vh",
  objectFit: "contain",
  borderRadius: "12px",
};

const modalTextStyle = {
  textAlign: "center",
  color: "#333",
  lineHeight: "1.6",
};

const closeButtonStyle = {
  position: "absolute",
  top: "15px",
  right: "20px",
  background: "none",
  border: "none",
  fontSize: "2rem",
  cursor: "pointer",
  color: "#db1c7c",
  fontWeight: "bold",
};

const arrowStyle = {
  fontSize: "2rem",
  color: "#db1c7c",
  background: "none",
  border: "none",
  cursor: "pointer",
  margin: "24px 0 0 12px",
  display: "flex",
  alignItems: "center"
};

const chamarraImages = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12];

const Chamarra = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img, idx) => {
    setSelectedImage({ img, idx });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const getImageInfo = (idx) => {
    const info = [
      "Chamarra elegante con diseño moderno y corte clásico. Perfecta para ocasiones formales.",
      "Chamarra deportiva con tecnología de última generación. Ideal para actividades al aire libre.",
      "Chamarra casual con estilo urbano. Cómoda y versátil para el día a día.",
      "Chamarra de trabajo resistente y duradera. Diseñada para profesionales exigentes.",
      "Chamarra de temporada con materiales premium. Elegancia y funcionalidad en una sola prenda.",
      "Chamarra especializada con características técnicas avanzadas. Para usuarios profesionales.",
      "Chamarra con diseño innovador y materiales de alta calidad. Estilo y comodidad garantizados.",
      "Chamarra versátil que combina funcionalidad y moda. Perfecta para cualquier ocasión.",
      "Chamarra premium con acabados de lujo. Para quienes buscan la máxima calidad.",
      "Chamarra técnica con características especiales. Diseñada para necesidades específicas.",
      "Chamarra con estilo contemporáneo y materiales sostenibles. Moda consciente y elegante.",
      "Chamarra exclusiva con diseño único. Para personalidades que buscan destacar."
    ];
    return info[idx] || "Chamarra de alta calidad con diseño exclusivo.";
  };

  return (
    <div>
      <button style={arrowStyle} onClick={() => navigate('/productos')} aria-label="Volver a productos">←</button>
      <h1 style={{ textAlign: "center", margin: "32px 0 16px 0", color: "#db1c7c", fontWeight: 700 }}>Chamarras</h1>
      <div style={gridStyle}>
        {chamarraImages.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt={`Chamarra ${idx + 1}`} 
            style={imgStyle}
            onClick={() => handleImageClick(img, idx)}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        ))}
      </div>

      {selectedImage && (
        <div style={modalOverlayStyle} onClick={handleCloseModal}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeButtonStyle} onClick={handleCloseModal} aria-label="Cerrar">×</button>
            <img 
              src={selectedImage.img} 
              alt={`Chamarra ${selectedImage.idx + 1}`} 
              style={modalImageStyle}
            />
            <div style={modalTextStyle}>
              <h3 style={{ color: "#db1c7c", marginBottom: "10px" }}>
                Chamarra {selectedImage.idx + 1}
              </h3>
              <p>{getImageInfo(selectedImage.idx)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chamarra; 