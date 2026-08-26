import React, { useState } from "react";
import foto1 from "../assets/shorts/MOD-00012.jpg";
import foto2 from "../assets/shorts/MOD-0163.jpg";
import foto3 from "../assets/shorts/MOD-0167.jpg";

import { useNavigate } from "react-router-dom";
import { getProductData } from "../data/productData";
import "./ProductGrid.css";

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
    const product = getProductData('shorts', idx);
    return `MOD. ${product.code}`;
  };

  const getProductDetails = (idx) => {
    return getProductData('shorts', idx);
  };

  return (
    <div className="product-page">
      <button
        className="back-button"
        onClick={() => navigate("/productos")}
        aria-label="Volver a productos"
      >
        ←
      </button>
      {/* Title removed as requested */}
      <div className="product-grid">
        {shortsImages.map((img, idx) => (
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
            <img src={img} alt={`Shorts ${idx + 1}`} />
            <div className="hover-caption">{getImageInfo(idx)}</div>
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
              alt={`Shorts ${selectedImage.idx + 1}`}
              className="modal-image"
            />
            <div className="modal-text">
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

export default Shorts;