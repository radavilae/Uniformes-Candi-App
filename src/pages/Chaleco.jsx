import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/WhatsApp Image 2025-05-07 at 6.35.04 PM.jpeg";
import img2 from "../assets/WhatsApp Image 2025-05-09 at 5.27.17 PM.jpeg";
import img3 from "../assets/WhatsApp Image 2025-05-09 at 5.27.17 PM (1).jpeg";
import img4 from "../assets/WhatsApp Image 2025-05-09 at 5.27.17 PM (3).jpeg";
import img5 from "../assets/WhatsApp Image 2025-05-12 at 5.00.10 PM.jpeg";
import img6 from "../assets/WhatsApp Image 2025-05-12 at 5.00.11 PM (3).jpeg";
import img7 from "../assets/WhatsApp Image 2025-05-12 at 5.00.11 PM (4).jpeg";
import img8 from "../assets/WhatsApp Image 2025-05-12 at 5.00.12 PM (1).jpeg";
import img9 from "../assets/WhatsApp Image 2025-05-12 at 5.00.13 PM.jpeg";

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

const chalecoImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Chaleco = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button style={arrowStyle} onClick={() => navigate('/productos')} aria-label="Volver a productos">←</button>
      <h1 style={{ textAlign: "center", margin: "32px 0 16px 0", color: "#db1c7c", fontWeight: 700 }}>Chalecos</h1>
      <div style={gridStyle}>
        {chalecoImages.map((img, idx) => (
          <img key={idx} src={img} alt={`Chaleco ${idx + 1}`} style={imgStyle} />
        ))}
      </div>
    </div>
  );
};

export default Chaleco; 