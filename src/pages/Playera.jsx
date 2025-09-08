import React from "react";
import { useNavigate } from "react-router-dom";
const img1 = new URL("../assets/playeras/MOD-0116.jpg", import.meta.url).href;
const img2 = new URL("../assets/playeras/MOD-0173.jpg", import.meta.url).href;

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
  boxShadow: "0 4px 24px rgba(219,28,124,0.20)",
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

const Playera = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button style={arrowStyle} onClick={() => navigate('/productos')} aria-label="Volver a productos">←</button>
      <h1 style={{ textAlign: "center", margin: "32px 0 16px 0", color: "#db1c7c", fontWeight: 700 }}>Playera</h1>
      <div style={gridStyle}>
        <img src={img1} alt="Playera 1" style={imgStyle} />
        <img src={img2} alt="Playera 2" style={imgStyle} />
      </div>
    </div>
  );
};

export default Playera;


