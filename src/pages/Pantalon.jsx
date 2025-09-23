import React from "react";
import foto1 from "../assets/pantalon/MOD-0089.jpg";
import foto2 from "../assets/pantalon/MOD-0171.jpg";
import { useNavigate } from "react-router-dom";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(260px, 340px))",
  gap: "80px",
  padding: "40px 60px",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "start",
};

const imgStyle = {
  width: "100%",
  maxWidth: "340px",
  height: "340px",
  objectFit: "cover",
  borderRadius: "18px",
  boxShadow: "none",
  transition: "transform 0.2s ease",
};

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

const Pantalon = () => {
  const navigate = useNavigate();
  return (
    <div style={pageStyle}>
      <button
        style={arrowStyle}
        onClick={() => navigate("/productos")}
        aria-label="Volver a productos"
      >
        ←
      </button>
      {/* Title removed as requested */}
      <div style={gridStyle}>
        {[foto1, foto2].map((img, idx) => (
          <div
            key={idx}
            style={imageCardStyle}
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
            <img src={img} alt={`Pantalón ${idx + 1}`} style={imgStyle} />
            <div className="hover-caption" style={hoverCaptionStyle}>{`Modelo Pantalón ${idx + 1}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pantalon;
