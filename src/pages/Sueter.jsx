import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductData } from "../data/productData";

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
  gridTemplateColumns: "repeat(3, minmax(260px, 340px))",
  gap: "48px",
  padding: "40px 20px",
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  justifyContent: "space-between",
  alignItems: "start",
};

const imgStyle = {
  width: "100%",
  maxWidth: "340px",
  height: "340px",
  objectFit: "cover",
  borderRadius: "18px",
  boxShadow: "none",
  cursor: "pointer",
  transition: "transform 0.2s, box-shadow 0.2s",
};

const imageCardStyle = {
  position: "relative",
  width: "100%",
  maxWidth: "340px",
  borderRadius: "18px",
  overflow: "hidden",
};

const hoverCaptionStyle = {
  marginTop: "8px",
  textAlign: "center",
  color: "#333",
  fontWeight: 600,
  lineHeight: 1.4,
  opacity: 0,
  transition: "opacity 0.2s ease",
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

const openInNewTabBtnStyle = {
  position: "absolute",
  top: "14px",
  left: "16px",
  padding: "6px 10px",
  borderRadius: "8px",
  border: "1px solid #e0e0e0",
  background: "#ffffff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
};

const squareIconStyle = {
  width: "18px",
  height: "18px",
  border: "1px solid #999",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  lineHeight: 1,
  color: "#333",
};

const closeButtonStyle = {
  position: "absolute",
  top: "15px",
  right: "20px",
  background: "none",
  border: "none",
  fontSize: "2rem",
  cursor: "pointer",
  color: "#000",
  fontWeight: "bold",
};

const arrowStyle = {
  fontSize: "2rem",
  color: "#000",
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

const getImageInfo = (idx) => {
  const product = getProductData('sueter', idx);
  return `MOD. ${product.code}`;
};

const getProductDetails = (idx) => {
  return getProductData('sueter', idx);
};

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
      {/* Title removed as requested */}
      <div style={gridStyle}>
        {sueterImages.map((img, idx) => (
          <div
            key={idx}
            style={imageCardStyle}
            onClick={() => handleImageClick(img, idx)}
            onMouseOver={(e) => {
              const imageEl = e.currentTarget.querySelector('img');
              const captionEl = e.currentTarget.querySelector('.hover-caption');
              if (imageEl) imageEl.style.transform = 'scale(1.05)';
              if (captionEl) captionEl.style.opacity = 1;
            }}
            onMouseOut={(e) => {
              const imageEl = e.currentTarget.querySelector('img');
              const captionEl = e.currentTarget.querySelector('.hover-caption');
              if (imageEl) imageEl.style.transform = 'scale(1)';
              if (captionEl) captionEl.style.opacity = 0;
            }}
          >
            <img
              src={img}
              alt={`Suéter ${idx + 1}`}
              style={imgStyle}
            />
            <div className="hover-caption" style={hoverCaptionStyle}>{getImageInfo(idx)}</div>
          </div>
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
            <button
              style={openInNewTabBtnStyle}
              onClick={() =>
                window.open(selectedImage.img, "_blank", "noopener,noreferrer")
              }
              aria-label="Abrir en nueva pestaña"
              title="Abrir en nueva pestaña"
            >
              <span style={squareIconStyle}>↗</span>
            </button>
            <img
              src={selectedImage.img}
              alt={`Suéter ${selectedImage.idx + 1}`}
              style={modalImageStyle}
            />
            <div style={modalTextStyle}>
              <h3 style={{ color: "#000", marginBottom: "6px", fontSize: "16px" }}>
                {getImageInfo(selectedImage.idx)}
              </h3>
              {(() => {
                const product = getProductDetails(selectedImage.idx);
                return (
                  <div style={{ textAlign: "left", maxWidth: "400px" }}>
                    <h4 style={{ color: "#000", marginBottom: "4px", fontSize: "14px" }}>{product.name}</h4>
                    <div style={{ marginBottom: "4px", fontSize: "12px" }}>
                      <strong>Material:</strong> {product.material}
                    </div>
                    <div style={{ marginBottom: "4px", fontSize: "12px" }}>
                      <strong>Tallas:</strong> {product.sizes.join(", ")}
                    </div>
                    <div style={{ marginBottom: "4px", fontSize: "12px" }}>
                      <strong>Colores:</strong> {product.colors.join(", ")}
                    </div>
                    <div style={{ marginBottom: "4px", fontSize: "12px" }}>
                      <strong>Características:</strong> {product.features.join(", ")}
                    </div>
                    <div style={{ marginBottom: "4px", fontSize: "12px" }}>
                      <strong>Cuidado:</strong> {product.care}
                    </div>
                    <div style={{ marginBottom: "4px", fontSize: "12px" }}>
                      <strong>Precio:</strong> {product.price}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sueter;
