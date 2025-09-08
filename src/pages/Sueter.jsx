import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/sueter/MOD-0009.jpg";
import img2 from "../assets/sueter/MOD-0013.jpg";
import img3 from "../assets/sueter/MOD-0025.jpg";
import img4 from "../assets/sueter/MOD-0034.jpg";
import img5 from "../assets/sueter/MOD-0047.jpg";
import img6 from "../assets/sueter/MOD-0050.jpg";
import img7 from "../assets/sueter/MOD-0057.jpg";
import img8 from "../assets/sueter/MOD-0082.jpg";
import img9 from "../assets/sueter/MOD-0095.jpg";
import img10 from "../assets/sueter/MOD-0112.jpg";
import img11 from "../assets/sueter/MOD-0117.jpg";
import img12 from "../assets/sueter/MOD-0179.jpg";
import img13 from "../assets/sueter/MOD-0180.jpg";
import img14 from "../assets/sueter/MOD-0183.jpg";
import img15 from "../assets/sueter/MOD-0191.jpg";
import img16 from "../assets/sueter/MOD-0118.jpg";
import img17 from "../assets/sueter/MOD-0185.jpg";

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

const sueterImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
];

const Sueter = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img, idx) => {
    setSelectedImage({ img, idx });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
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
        Suéter
      </h1>
      <div style={gridStyle}>
        {sueterImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Suéter ${idx + 1}`}
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
              alt={`Suéter ${selectedImage.idx + 1}`}
              style={modalImageStyle}
            />
            <div style={modalTextStyle}>
              <h3 style={{ color: "#db1c7c", marginBottom: "10px" }}>
                Suéter {selectedImage.idx + 1}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sueter;
