import React, { useState } from "react";
import foto1 from "../assets/chamarra/MOD-0003.jpg";
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
import { getProductData } from "../data/productData";
import "./Chamarra.css";

const chamarraImages = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9,
  foto10,
  foto11,
  foto12,
];

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
    const product = getProductData('chamarra', idx);
    return `MOD. ${product.code}`;
  };

  const getProductDetails = (idx) => {
    return getProductData('chamarra', idx);
  };

  return (
    <div className="chamarra-page">
      <button
        className="back-button"
        onClick={() => navigate("/productos")}
        aria-label="Volver a productos"
      >
        ←
      </button>
      {/* Title removed as requested */}
      <div className="chamarra-grid">
        {chamarraImages.map((img, idx) => (
          <div
            key={idx}
            className="image-card"
            onClick={() => handleImageClick(img, idx)}
            onMouseOver={(e) => {
              const imageEl = e.currentTarget.querySelector("img");
              const captionEl = e.currentTarget.querySelector(".hover-caption");
              if (imageEl) imageEl.style.transform = "scale(1.05)";
              if (captionEl) captionEl.style.opacity = 1;
            }}
            onMouseOut={(e) => {
              const imageEl = e.currentTarget.querySelector("img");
              const captionEl = e.currentTarget.querySelector(".hover-caption");
              if (imageEl) imageEl.style.transform = "scale(1)";
              if (captionEl) captionEl.style.opacity = 0;
            }}
          >
            <img src={img} alt={`Chamarra ${idx + 1}`} />
            <div className="hover-caption">
              {getImageInfo(idx)}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={handleCloseModal}
              aria-label="Cerrar"
            >
              ×
            </button>
            <button
              className="open-in-new-tab-btn"
              onClick={() =>
                window.open(selectedImage.img, "_blank", "noopener,noreferrer")
              }
              aria-label="Abrir en nueva pestaña"
              title="Abrir en nueva pestaña"
            >
              <span className="square-icon">↗</span>
            </button>
            <img
              src={selectedImage.img}
              alt={`Chamarra ${selectedImage.idx + 1}`}
              className="modal-image"
            />
            <div className="modal-text">
              <h3 style={{ color: "#000", marginBottom: "8px", fontSize: "16px" }}>
                {getImageInfo(selectedImage.idx)}
              </h3>
              {(() => {
                const product = getProductDetails(selectedImage.idx);
                return (
                  <div style={{ 
                    textAlign: "left", 
                    maxWidth: "400px",
                    width: "100%"
                  }}>
                    <h4 style={{ 
                      color: "#000", 
                      marginBottom: "6px", 
                      fontSize: "14px",
                      fontWeight: "600"
                    }}>
                      {product.name}
                    </h4>
                    
                    <div style={{ 
                      display: "grid", 
                      gridTemplateColumns: "1fr 1fr", 
                      gap: "8px",
                      marginBottom: "8px"
                    }}>
                      <div>
                        <div style={{ fontSize: "10px", color: "#000", marginBottom: "1px", fontWeight: "500" }}>MATERIAL</div>
                        <div style={{ fontSize: "11px", color: "#000", lineHeight: "1.2" }}>{product.material}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: "10px", color: "#000", marginBottom: "1px", fontWeight: "500" }}>TALLAS</div>
                        <div style={{ fontSize: "11px", color: "#000", lineHeight: "1.2" }}>{product.sizes.join(", ")}</div>
                      </div>
                    </div>

                    <div style={{ 
                      display: "grid", 
                      gridTemplateColumns: "1fr 1fr", 
                      gap: "8px",
                      marginBottom: "8px"
                    }}>
                      <div>
                        <div style={{ fontSize: "10px", color: "#000", marginBottom: "1px", fontWeight: "500" }}>COLORES</div>
                        <div style={{ fontSize: "11px", color: "#000", lineHeight: "1.2" }}>{product.colors.join(", ")}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: "10px", color: "#000", marginBottom: "1px", fontWeight: "500" }}>PRECIO</div>
                        <div style={{ fontSize: "11px", color: "#000", fontWeight: "500" }}>{product.price}</div>
                      </div>
                    </div>

                    <div style={{ marginBottom: "6px" }}>
                      <div style={{ fontSize: "10px", color: "#000", marginBottom: "1px", fontWeight: "500" }}>CARACTERÍSTICAS</div>
                      <div style={{ fontSize: "11px", color: "#000", lineHeight: "1.2" }}>
                        {product.features.join(" • ")}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: "10px", color: "#000", marginBottom: "1px", fontWeight: "500" }}>CUIDADO</div>
                      <div style={{ fontSize: "11px", color: "#000", lineHeight: "1.2" }}>{product.care}</div>
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

export default Chamarra;
