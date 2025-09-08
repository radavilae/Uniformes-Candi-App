import React from "react";
import foto1 from "../assets/pantalon/MOD-0089.jpg";
import foto2 from "../assets/pantalon/MOD-0171.jpg";
import { useNavigate } from "react-router-dom";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(260px, 1fr))",
  gap: "32px",
  padding: "40px 0",
  justifyItems: "center",
  maxWidth: "760px",
  margin: "0 auto",
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
  alignItems: "center",
};

const Pantalon = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        style={arrowStyle}
        onClick={() => navigate("/productos")}
        aria-label="Volver a productos"
      >
        ←
      </button>
      <h1
        style={{
          textAlign: "center",
          margin: "32px 0 16px 0",
          color: "#db1c7c",
          fontWeight: 700,
        }}
      >
        Pantalón
      </h1>
      <div style={gridStyle}>
        <img src={foto1} alt="Pantalón 1" style={imgStyle} />
        <img src={foto2} alt="Pantalón 2" style={imgStyle} />
      </div>
    </div>
  );
};

export default Pantalon;
