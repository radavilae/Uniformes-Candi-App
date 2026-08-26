import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductData } from "../data/productData";
import "./ProductGrid.css";

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
        {sueterImages.map((img, idx) => (
          <div
            key={idx}
            className="image-card"
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
            />
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
              alt={`Suéter ${selectedImage.idx + 1}`}
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

export default Sueter;