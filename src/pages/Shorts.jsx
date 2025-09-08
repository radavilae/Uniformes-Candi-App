import React, { useState } from "react";
import foto1 from "../assets/shorts/MOD-00012.jpg";
import foto2 from "../assets/shorts/MOD-0163.jpg";
import foto3 from "../assets/shorts/MOD-0167.jpg";

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
  alignItems: "center",
};

const shortsImages = [foto1, foto2, foto3];

const Shorts = () => {
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
      "Shorts deportivos con tecnología de secado rápido. Perfectos para actividades físicas y deportes.",
      "Shorts casuales con diseño moderno y cómodo. Ideales para el día a día y actividades recreativas.",
      "Shorts de trabajo resistentes y funcionales. Diseñados para profesionales que requieren movilidad.",
    ];
    return info[idx] || "Shorts de alta calidad con diseño especializado.";
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
        Shorts
      </h1>
      <div style={gridStyle}>
        {shortsImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Shorts ${idx + 1}`}
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
              alt={`Shorts ${selectedImage.idx + 1}`}
              style={modalImageStyle}
            />
            <div style={modalTextStyle}>
              <h3 style={{ color: "#db1c7c", marginBottom: "10px" }}>
                Shorts {selectedImage.idx + 1}
              </h3>
              <p>{getImageInfo(selectedImage.idx)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shorts;
