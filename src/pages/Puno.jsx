import React from "react";
import { useNavigate } from "react-router-dom";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";

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

const backStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  color: "#db1c7c",
  fontWeight: 600,
  fontSize: "1.1rem",
  cursor: "pointer",
  margin: "24px 0 0 24px",
  textDecoration: "none",
  border: "none",
  background: "none"
};

const Puno = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button style={backStyle} onClick={() => navigate('/productos')}>
        <span style={{ fontSize: "1.6rem", lineHeight: 1, display: "inline-block", transform: "translateY(2px)" }}>&larr;</span>
        Volver a Productos
      </button>
      <h1 style={{ textAlign: "center", margin: "32px 0 16px 0", color: "#db1c7c", fontWeight: 700 }}>Puños</h1>
      <div style={gridStyle}>
        <img src={foto2} alt="Puno 1" style={imgStyle} />
        <img src={foto3} alt="Puno 2" style={imgStyle} />
      </div>
    </div>
  );
};

export default Puno; 