import React from "react";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
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

const Puno = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button style={arrowStyle} onClick={() => navigate('/productos')} aria-label="Volver a productos">←</button>
      <h1 style={{ textAlign: "center", margin: "32px 0 16px 0", color: "#db1c7c", fontWeight: 700 }}>Puños</h1>
      <div style={gridStyle}>
        <img src={foto2} alt="Puno 1" style={imgStyle} />
        <img src={foto3} alt="Puno 2" style={imgStyle} />
      </div>
    </div>
  );
};

export default Puno; 