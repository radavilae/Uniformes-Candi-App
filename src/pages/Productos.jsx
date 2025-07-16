import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpg";
import foto5 from "../assets/foto5.jpg";
import img1 from "../assets/WhatsApp Image 2025-05-07 at 6.35.04 PM.jpeg";

const allFotos = [foto1, img1, foto3, foto4, foto5];
const titles = ["Chamarras", "Chalecos", "Uniformes", "Puños", "Otros"];

function getRandomImage(exclude) {
  const filtered = allFotos.filter((img) => img !== exclude);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

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
  cursor: "pointer",
  transition: "box-shadow 0.2s, transform 0.2s",
};

const titleStyle = {
  textAlign: "center",
  marginTop: "12px",
  color: "#db1c7c",
  fontWeight: 600,
  fontSize: "1.1rem",
  letterSpacing: "1px",
  textTransform: "uppercase",
};

const Productos = () => {
  const [imgs, setImgs] = useState([foto1, foto2, foto3, foto4, foto5]);
  const navigate = useNavigate();

  useEffect(() => {
    const intervals = imgs.map((img, idx) =>
      setInterval(() => {
        setImgs((prev) => {
          const newImgs = [...prev];
          newImgs[idx] = getRandomImage(prev[idx]);
          return newImgs;
        });
      }, 2000 + idx * 1200)
    );
    return () => intervals.forEach(clearInterval);
    // eslint-disable-next-line
  }, []);

  const handleClick = (idx) => {
    navigate(`/productos/${idx + 1}`);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "32px 0 16px 0", color: "#db1c7c", fontWeight: 700 }}>Nuestros Productos</h1>
      <div style={gridStyle}>
        {imgs.map((foto, idx) => (
          <div key={idx} style={{ width: "100%", maxWidth: "340px" }}>
            <img
              src={foto}
              alt={titles[idx]}
              style={imgStyle}
              onClick={() => handleClick(idx)}
              onMouseOver={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(219,28,124,0.18)'}
              onMouseOut={e => e.currentTarget.style.boxShadow = '0 4px 24px rgba(219,28,124,0.10)'}
            />
            <div style={titleStyle}>{titles[idx]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos; 