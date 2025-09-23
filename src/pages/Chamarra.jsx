import React, { useEffect, useState } from "react";
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

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(260px, 340px))",
  gap: "80px",
  padding: "40px 60px",
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
  transition: "transform 0.2s ease",
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


const deepZoomOverlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 3000,
  padding: 0,
};

const deepZoomImgBaseStyle = {
  maxWidth: "98vw",
  maxHeight: "98vh",
  objectFit: "contain",
  borderRadius: "12px",
  transition: "transform 0.15s ease",
};

const deepZoomCloseStyle = {
  position: "absolute",
  top: "14px",
  right: "16px",
  background: "#ffffff",
  border: "none",
  borderRadius: "8px",
  padding: "8px 12px",
  cursor: "pointer",
  fontSize: "1rem",
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

const pageStyle = {
  background: "#ffffff",
  minHeight: "100vh",
  paddingBottom: "24px",
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

const Chamarra = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const [showDeepZoom, setShowDeepZoom] = useState(false);
  const [deepZoomScale, setDeepZoomScale] = useState(3.0);
  // Drag to pan when zoomed in
  const [isDragging, setIsDragging] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [mouseDownInfo, setMouseDownInfo] = useState({ x: 0, y: 0, t: 0 });
  // Drag/offset disabled to keep image fixed while magnifying

  const handleImageClick = (img, idx) => {
    setSelectedImage({ img, idx });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsEnlarged(false);
    setShowDeepZoom(false);
    setDeepZoomScale(1.8);
    setOffset({ x: 0, y: 0 });
  };

  const handleWheelZoom = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.35 : 0.35;
    setDeepZoomScale((s) => Math.max(1, Math.min(8, s + delta)));
  };

  // Prevent background scroll when deep zoom open
  useEffect(() => {
    if (showDeepZoom) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [showDeepZoom]);

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
    <div style={pageStyle}>
      <button style={arrowStyle} onClick={() => navigate('/productos')} aria-label="Volver a productos">←</button>
      {/* Title removed as requested */}
      <div style={gridStyle}>
        {chamarraImages.map((img, idx) => (
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
              alt={`Chamarra ${idx + 1}`}
              style={imgStyle}
            />
            <div className="hover-caption" style={hoverCaptionStyle}>{getImageInfo(idx)}</div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div style={modalOverlayStyle} onClick={handleCloseModal}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeButtonStyle} onClick={handleCloseModal} aria-label="Cerrar">×</button>
            <button
              style={openInNewTabBtnStyle}
              onClick={() => window.open(selectedImage.img, '_blank', 'noopener,noreferrer')}
              aria-label="Abrir en nueva pestaña"
              title="Abrir en nueva pestaña"
            >
              <span style={squareIconStyle}>↗</span>
            </button>
            <img 
              src={selectedImage.img} 
              alt={`Chamarra ${selectedImage.idx + 1}`} 
              style={{
                ...modalImageStyle,
                cursor: isEnlarged ? "zoom-out" : "zoom-in",
                transform: isEnlarged ? "scale(2.0)" : "scale(1)",
                transformOrigin: 'center center',
                transition: "transform 0.2s ease, transform-origin 0.1s ease",
              }}
              onClick={() => setIsEnlarged((v) => !v)}
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

      {showDeepZoom && selectedImage && (
        <div style={deepZoomOverlayStyle} onClick={() => setShowDeepZoom(false)}>
          <button style={deepZoomCloseStyle} onClick={() => setShowDeepZoom(false)} aria-label="Cerrar ampliación">Cerrar</button>
          <img
            src={selectedImage.img}
            alt={`Chamarra ${selectedImage.idx + 1} ampliada`}
            style={{
              ...deepZoomImgBaseStyle,
              transform: deepZoomScale > 1 ? `translate(${offset.x}px, ${offset.y}px) scale(${deepZoomScale})` : `scale(${deepZoomScale})`,
              cursor: deepZoomScale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
            }}
            onWheel={handleWheelZoom}
            onMouseDown={(e) => {
              if (deepZoomScale <= 1) return;
              e.preventDefault();
              setIsDragging(true);
              setLastPos({ x: e.clientX, y: e.clientY });
              setMouseDownInfo({ x: e.clientX, y: e.clientY, t: Date.now() });
            }}
            onMouseMove={(e) => {
              if (!isDragging) return;
              const dx = e.clientX - lastPos.x;
              const dy = e.clientY - lastPos.y;
              setLastPos({ x: e.clientX, y: e.clientY });
              setOffset((o) => ({ x: o.x + dx, y: o.y + dy }));
            }}
            onMouseUp={(e) => {
              const dt = Date.now() - mouseDownInfo.t;
              const dist = Math.hypot(e.clientX - mouseDownInfo.x, e.clientY - mouseDownInfo.y);
              setIsDragging(false);
              e.stopPropagation();
              // If it was a click (not a drag), toggle zoom
              if (dt < 250 && dist < 5) {
                if (deepZoomScale > 1) {
                  setDeepZoomScale(1);
                  setOffset({ x: 0, y: 0 });
                } else {
                  setDeepZoomScale(4.0);
                }
              }
            }}
            onMouseLeave={() => setIsDragging(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Chamarra; 