import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FiArrowRight, FiHeart, FiShoppingBag } from "react-icons/fi";

// Chamarra photos
import chamarra1 from "../assets/chamarra/MOD-0003.jpg";
import chamarra2 from "../assets/chamarra/MOD-004.jpg";
import chamarra3 from "../assets/chamarra/MOD-0077.jpg";
import chamarra4 from "../assets/chamarra/MOD-0088.jpg";
import chamarra5 from "../assets/chamarra/MOD-0094.jpg";
import chamarra6 from "../assets/chamarra/MOD-0122.jpg";
import chamarra7 from "../assets/chamarra/MOD-0131.jpg";
import chamarra8 from "../assets/chamarra/MOD-0151.jpg";
import chamarra9 from "../assets/chamarra/MOD-0162.jpg";
import chamarra10 from "../assets/chamarra/MOD-0166.jpg";
import chamarra11 from "../assets/chamarra/MOD-0175.jpg";
import chamarra12 from "../assets/chamarra/MOD-0193.jpg";
// Chaleco photos
import chaleco1 from "../assets/chaleco/MOD-0007.jpg";
import chaleco2 from "../assets/chaleco/MOD-0011.jpg";
import chaleco3 from "../assets/chaleco/MOD-0040.jpg";
import chaleco4 from "../assets/chaleco/MOD-0081.jpg";
import chaleco5 from "../assets/chaleco/MOD-0096.jpg";
import chaleco6 from "../assets/chaleco/MOD-0178.jpg";
// Pantalon photos
import pantalon1 from "../assets/pantalon/MOD-0089.jpg";
import pantalon2 from "../assets/pantalon/MOD-0171.jpg";
// Shorts photos
import shorts1 from "../assets/shorts/MOD-00012.jpg";
import shorts2 from "../assets/shorts/MOD-0163.jpg";
import shorts3 from "../assets/shorts/MOD-0167.jpg";
// Falda photos
import falda1 from "../assets/falda/MOD-0002.jpg";
import falda2 from "../assets/falda/MOD-0078.jpg";
import falda3 from "../assets/falda/MOD-0164.jpg";
import falda4 from "../assets/falda/MOD-0170.jpg";
// Pants photos
import pant1 from "../assets/pants/MOD-0003P.jpg";
import pant2 from "../assets/pants/MOD-004P.jpg";
import pant3 from "../assets/pants/MOD-0033P.jpg";
import pant4 from "../assets/pants/MOD-0094P.jpg";
import pant5 from "../assets/pants/MOD-0151P.jpg";
import pant6 from "../assets/pants/MOD-0165.jpg";
import pant7 from "../assets/pants/MOD-0176.jpg";
import pant8 from "../assets/pants/MOD-0181.jpg";
import pant9 from "../assets/pants/MOD-0187.jpg";
// Sueter photos
import sueter1 from "../assets/sueter/MOD-0009.jpg";
import sueter2 from "../assets/sueter/MOD-0013.jpg";
import sueter3 from "../assets/sueter/MOD-0025.jpg";
import sueter4 from "../assets/sueter/MOD-0034.jpg";
import sueter5 from "../assets/sueter/MOD-0047.jpg";
import sueter6 from "../assets/sueter/MOD-0050.jpg";
import sueter7 from "../assets/sueter/MOD-0057.jpg";
import sueter8 from "../assets/sueter/MOD-0082.jpg";
import sueter9 from "../assets/sueter/MOD-0095.jpg";
import sueter10 from "../assets/sueter/MOD-0112.jpg";
import sueter11 from "../assets/sueter/MOD-0117.jpg";
import sueter12 from "../assets/sueter/MOD-0179.jpg";
import sueter13 from "../assets/sueter/MOD-0180.jpg";
import sueter14 from "../assets/sueter/MOD-0183.jpg";
import sueter15 from "../assets/sueter/MOD-0191.jpg";
import sueter16 from "../assets/sueter/MOD-0118.jpg";
import sueter17 from "../assets/sueter/MOD-0185.jpg";
// Bata photos
import bata1 from "../assets/bata/MOD-0090.jpg";
// Sudadera photos
import sudadera1 from "../assets/sudadera/MOD-0193.jpg";
// Mandil photos
import mandil1 from "../assets/mandil/MOD-0065.jpg";
// Playera photos
import playera1 from "../assets/playeras/MOD-0116.jpg";
import playera2 from "../assets/playeras/MOD-0173.jpg";

const chamarraFotos = [
  chamarra1,
  chamarra2,
  chamarra3,
  chamarra4,
  chamarra5,
  chamarra6,
  chamarra7,
  chamarra8,
  chamarra9,
  chamarra10,
  chamarra11,
  chamarra12,
];
const chalecoFotos = [
  chaleco1,
  chaleco2,
  chaleco3,
  chaleco4,
  chaleco5,
  chaleco6,
];
const pantalonFotos = [pantalon1, pantalon2];
const shortsFotos = [shorts1, shorts2, shorts3];

const pantsFotos = [
  pant1,
  pant2,
  pant3,
  pant4,
  pant5,
  pant6,
  pant7,
  pant8,
  pant9,
];

const sueterFotos = [
  sueter1,
  sueter2,
  sueter3,
  sueter4,
  sueter5,
  sueter6,
  sueter7,
  sueter8,
  sueter9,
  sueter10,
  sueter11,
  sueter12,
  sueter13,
  sueter14,
  sueter15,
  sueter16,
  sueter17,
];

const bataFotos = [bata1];
const sudaderaFotos = [sudadera1];
const mandilFotos = [mandil1];
const playeraFotos = [playera1, playera2];

const faldaFotos = [falda1, falda2, falda3, falda4];

const titles = [
  "Chamarras",
  "Chalecos",
  "Pantalón",
  "Shorts",
  "Faldas",
  "Pants",
  "Suéter",
  "Mandil",
  "Sudadera",
  "Bata",
  "Playera",
];

function getRandomImage(exclude, category = "general") {
  let imagePool;
  switch (category) {
    case "chamarra":
      imagePool = chamarraFotos;
      break;
    case "chaleco":
      imagePool = chalecoFotos;
      break;
    case "pantalon":
      imagePool = pantalonFotos;
      break;
    case "shorts":
      imagePool = shortsFotos;
      break;
    case "falda":
      imagePool = faldaFotos;
      break;
    case "pants":
      imagePool = pantsFotos;
      break;
    case "sueter":
      imagePool = sueterFotos;
      break;
    case "bata":
      imagePool = bataFotos;
      break;
    case "sudadera":
      imagePool = sudaderaFotos;
      break;
    case "mandil":
      imagePool = mandilFotos;
      break;
    case "playera":
      imagePool = playeraFotos;
      break;
    default:
  }
  const filtered = imagePool.filter((img) => img !== exclude);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "32px",
  padding: "80px 24px",
  maxWidth: "1400px",
  margin: "0 auto",
  position: "relative",
  zIndex: 1,
};

const pageStyle = {
  background: "linear-gradient(180deg, #fafafa 0%, #ffffff 100%)",
  minHeight: "100vh",
  paddingBottom: "80px",
  position: "relative",
  overflow: "hidden",
};

const headerStyle = {
  textAlign: "center",
  padding: "60px 20px 40px",
  position: "relative",
  zIndex: 2,
};

const headerTitle = {
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontWeight: 800,
  color: "#1a1a1a",
  marginBottom: "16px",
  letterSpacing: "-1px",
};

const headerSubtitle = {
  fontSize: "clamp(1rem, 2vw, 1.2rem)",
  color: "#666",
  maxWidth: "600px",
  margin: "0 auto",
  lineHeight: "1.6",
};

const watermarkWrapperStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  zIndex: 0,
};

const watermarkImageStyle = {
  width: "60vw",
  maxWidth: "800px",
  minWidth: "360px",
  opacity: 0.04,
  filter: "grayscale(100%)",
};

const getCardStyle = (idx) => {
  return {
    background: "white",
    borderRadius: "20px",
    padding: "0",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    border: "1px solid rgba(0, 0, 0, 0.06)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    width: "100%",
    maxWidth: "380px",
  };
};

const imgContainerStyle = {
  position: "relative",
  overflow: "hidden",
  borderRadius: "20px 20px 0 0",
  aspectRatio: "4/5",
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
};

const imgOverlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
  opacity: 0,
  transition: "opacity 0.4s ease",
};

const quickActions = {
  position: "absolute",
  bottom: "16px",
  right: "16px",
  display: "flex",
  gap: "8px",
  opacity: 0,
  transform: "translateY(10px)",
  transition: "all 0.3s ease",
};

const actionButton = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "white",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  transition: "all 0.3s ease",
  color: "#1a1a1a",
};

const cardContent = {
  padding: "20px",
};

const getTitleStyle = (idx) => {
  return {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: "8px",
    letterSpacing: "-0.3px",
    textTransform: "none",
  };
};

const cardMeta = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "12px",
};

const metaBadge = {
  fontSize: "0.75rem",
  fontWeight: 600,
  padding: "4px 10px",
  borderRadius: "20px",
  background: "#f5f5f5",
  color: "#666",
};

const cardDescription = {
  fontSize: "0.9rem",
  color: "#888",
  lineHeight: "1.5",
  marginBottom: "16px",
};

const cardFooter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: "16px",
  borderTop: "1px solid #f0f0f0",
};

const viewButton = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "0.9rem",
  fontWeight: 600,
  color: "#db1c7c",
  textDecoration: "none",
  transition: "gap 0.3s ease",
};

const Productos = () => {
  const [imgs] = useState([
    chamarra1,
    chaleco1,
    pantalon1,
    shorts1,
    falda1,
    pant1,
    sueter1,
    mandil1,
    sudadera1,
    bata1,
    playera1,
  ]);
  const navigate = useNavigate();

  const handleClick = (idx) => {
    const routeMapping = [1, 2, 3, 4, 7, 6, 8, 12, 10, 9, 11];
    const routeIndex = routeMapping[idx] || idx + 1;
    navigate(`/productos/${routeIndex}`);
  };

  const descriptions = [
    "Chamarras elegantes y resistentes para cualquier ocasión",
    "Chalecos versátiles con diseño moderno",
    "Pantalones de alta calidad y confort",
    "Shorts frescos y deportivos",
    "Faldas con estilo profesional",
    "Pants cómodos para el día a día",
    "Suéters cálidos con diseños únicos",
    "Mandiles funcionales y duraderos",
    "Sudaderas con estilo contemporáneo",
    "Batas profesionales y elegantes",
    "Playeras con diseños exclusivos"
  ];

  const counts = [
    "12 modelos",
    "6 modelos",
    "2 modelos",
    "3 modelos",
    "4 modelos",
    "9 modelos",
    "17 modelos",
    "1 modelo",
    "1 modelo",
    "1 modelo",
    "2 modelos"
  ];

  return (
    <div style={pageStyle}>
      <div style={watermarkWrapperStyle}>
        <img src={logo} alt="Candi watermark" style={watermarkImageStyle} />
      </div>
      
      <div style={headerStyle}>
        <h1 style={headerTitle}>Nuestra Colección</h1>
        <p style={headerSubtitle}>
          Descubre nuestra línea completa de uniformes diseñados con los más altos estándares de calidad y estilo
        </p>
      </div>
      
      <div style={gridStyle}>
        {imgs.map((foto, idx) => {
          return (
            <div
              key={idx}
              style={getCardStyle(idx)}
              onClick={() => handleClick(idx)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.12)";
                e.currentTarget.querySelector("img").style.transform = "scale(1.08)";
                e.currentTarget.querySelector(".img-overlay").style.opacity = "1";
                e.currentTarget.querySelector(".quick-actions").style.opacity = "1";
                e.currentTarget.querySelector(".quick-actions").style.transform = "translateY(0)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
                e.currentTarget.querySelector("img").style.transform = "scale(1)";
                e.currentTarget.querySelector(".img-overlay").style.opacity = "0";
                e.currentTarget.querySelector(".quick-actions").style.opacity = "0";
                e.currentTarget.querySelector(".quick-actions").style.transform = "translateY(10px)";
              }}
            >
              <div style={imgContainerStyle}>
                <img src={foto} alt={titles[idx]} style={imgStyle} />
                <div className="img-overlay" style={imgOverlay}></div>
                <div className="quick-actions" style={quickActions}>
                  <button 
                    style={actionButton}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    title="Guardar"
                  >
                    <FiHeart size={18} />
                  </button>
                  <button 
                    style={actionButton}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    title="Añadir"
                  >
                    <FiShoppingBag size={18} />
                  </button>
                </div>
              </div>
              
              <div style={cardContent}>
                <div style={cardMeta}>
                  <span style={metaBadge}>{counts[idx]}</span>
                  <span style={{...metaBadge, background: "linear-gradient(135deg, #db1c7c20 0%, #e91e6320 100%)", color: "#db1c7c"}}>Premium</span>
                </div>
                
                <h3 style={getTitleStyle(idx)}>{titles[idx]}</h3>
                <p style={cardDescription}>{descriptions[idx]}</p>
                
                <div style={cardFooter}>
                  <span style={{fontSize: "0.85rem", color: "#999"}}>Ver detalles</span>
                  <div style={viewButton}>
                    <FiArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
