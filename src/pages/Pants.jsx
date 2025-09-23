import React from "react";
import pant1 from "../assets/pants/MOD-0003P.jpg";
import pant2 from "../assets/pants/MOD-004P.jpg";
import pant3 from "../assets/pants/MOD-0033P.jpg";
import pant4 from "../assets/pants/MOD-0094P.jpg";
import pant5 from "../assets/pants/MOD-0151P.jpg";
import pant6 from "../assets/pants/MOD-0165.jpg";
import pant7 from "../assets/pants/MOD-0176.jpg";
import pant8 from "../assets/pants/MOD-0181.jpg";
import pant9 from "../assets/pants/MOD-0187.jpg";

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
  alignItems: "center"
};

const Pants = () => {
  const navigate = useNavigate();
  return (
    <div style={pageStyle}>
      <button style={arrowStyle} onClick={() => navigate('/productos')} aria-label="Volver a productos">←</button>
      {/* Title removed as requested */}
      <div style={gridStyle}>
        {[pant1, pant2, pant3, pant4, pant5, pant6, pant7, pant8, pant9].map((img, idx) => (
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
            <img src={img} alt={`Pants ${idx + 1}`} style={imgStyle} />
            <div className="hover-caption" style={hoverCaptionStyle}>{`Modelo Pants ${idx + 1}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pants; 