import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/chaleco/MOD-0007.jpg";
import img2 from "../assets/chaleco/MOD-0011.jpg";
import img3 from "../assets/chaleco/MOD-0040.jpg";
import img4 from "../assets/chaleco/MOD-0081.jpg";
import img5 from "../assets/chaleco/MOD-0096.jpg";
import img6 from "../assets/chaleco/MOD-0178.jpg";

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
  alignItems: "center",
};

const chalecoImages = [img1, img2, img3, img4, img5, img6];

const Chaleco = () => {
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
      "Chaleco funcional con múltiples bolsillos. Ideal para trabajo y actividades al aire libre.",
      "Chaleco de seguridad con materiales reflectantes. Protección y visibilidad garantizadas.",
      "Chaleco deportivo ligero y transpirable. Perfecto para actividades físicas intensas.",
      "Chaleco táctico con diseño profesional. Equipado con características especializadas.",
      "Chaleco de caza con camuflaje efectivo. Diseñado para cazadores y entusiastas.",
      "Chaleco de pesca con bolsillos especializados. Para pescadores profesionales y aficionados.",
      "Chaleco de construcción resistente y duradero. Protección en el lugar de trabajo.",
      "Chaleco de emergencia con equipamiento de rescate. Para profesionales de seguridad.",
      "Chaleco de moda con estilo urbano. Combina funcionalidad y tendencia actual.",
    ];
    return info[idx] || "Chaleco de alta calidad con diseño especializado.";
  };

  return (
    <div>
      <button
        style={arrowStyle}
        onClick={() => navigate("/productos")}
        aria-label="Volver a productos"
      >
        ←
      </button>
      <h1
        style={{
          textAlign: "center",
          margin: "32px 0 16px 0",
          color: "#db1c7c",
          fontWeight: 700,
        }}
      >
        Chalecos
      </h1>
      <div style={gridStyle}>
        {chalecoImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Chaleco ${idx + 1}`}
            style={imgStyle}
            onClick={() => handleImageClick(img, idx)}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ))}
      </div>

      {selectedImage && (
        <div style={modalOverlayStyle} onClick={handleCloseModal}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <button
              style={closeButtonStyle}
              onClick={handleCloseModal}
              aria-label="Cerrar"
            >
              ×
            </button>
            <img
              src={selectedImage.img}
              alt={`Chaleco ${selectedImage.idx + 1}`}
              style={modalImageStyle}
            />
            <div style={modalTextStyle}>
              <h3 style={{ color: "#db1c7c", marginBottom: "10px" }}>
                Chaleco {selectedImage.idx + 1}
              </h3>
              <p>{getImageInfo(selectedImage.idx)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chaleco;
