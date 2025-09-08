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

const Pants = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button style={arrowStyle} onClick={() => navigate('/productos')} aria-label="Volver a productos">←</button>
      <h1 style={{ textAlign: "center", margin: "32px 0 16px 0", color: "#db1c7c", fontWeight: 700 }}>Pants</h1>
      <div style={gridStyle}>
        <img src={pant1} alt="Pants 1" style={imgStyle} />
        <img src={pant2} alt="Pants 2" style={imgStyle} />
        <img src={pant3} alt="Pants 3" style={imgStyle} />
        <img src={pant4} alt="Pants 4" style={imgStyle} />
        <img src={pant5} alt="Pants 5" style={imgStyle} />
        <img src={pant6} alt="Pants 6" style={imgStyle} />
        <img src={pant7} alt="Pants 7" style={imgStyle} />
        <img src={pant8} alt="Pants 8" style={imgStyle} />
        <img src={pant9} alt="Pants 9" style={imgStyle} />
      </div>
    </div>
  );
};

export default Pants; 