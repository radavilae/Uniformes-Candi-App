import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

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
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "40px",
  padding: "60px 20px",
  justifyItems: "center",
  maxWidth: "1400px",
  margin: "0 auto",
  position: "relative",
  zIndex: 1,
};

const pageStyle = {
  background: "#ffffff",
  minHeight: "100vh",
  paddingBottom: "40px",
  position: "relative",
  overflow: "hidden",
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
  opacity: 0.09,
  filter: "grayscale(10%) drop-shadow(0 0 2px rgba(0,0,0,0.18)) drop-shadow(0 0 6px rgba(0,0,0,0.08))",
};

const getCardStyle = (idx) => {
  return {
    background: "transparent",
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "none",
    border: "none",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    width: "100%",
    maxWidth: "360px",
  };
};

const imgStyle = {
  width: "100%",
  height: "280px",
  objectFit: "cover",
  borderRadius: "16px",
  boxShadow: "none",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  zIndex: 2,
};

const getTitleStyle = (idx) => {
  return {
    textAlign: "center",
    marginTop: "20px",
    color: "#000000",
    fontWeight: 700,
    fontSize: "1.2rem",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    position: "relative",
    zIndex: 2,
    textShadow: "none",
  };
};

const getCardOverlayStyle = (idx) => {
  const colors = [
    { primary: "#db1c7c", secondary: "#e91e63", accent: "#f06292" }, // Chamarras - Pink
    { primary: "#2e7d32", secondary: "#388e3c", accent: "#4caf50" }, // Chalecos - Green
    { primary: "#1976d2", secondary: "#1e88e5", accent: "#42a5f5" }, // Pantalón - Blue
    { primary: "#00bcd4", secondary: "#26c6da", accent: "#4dd0e1" }, // Shorts - Cyan
    { primary: "#f57c00", secondary: "#ff9800", accent: "#ffb74d" }, // Puños - Orange
    { primary: "#7b1fa2", secondary: "#8e24aa", accent: "#ab47bc" },
    // Otros - Purple
  ];

  const color = colors[idx] || colors[0];

  return {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${color.primary}08 0%, ${color.secondary}05 100%)`,
    opacity: 0,
    transition: "opacity 0.4s ease",
    borderRadius: "24px",
    zIndex: 1,
  };
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

  return (
    <div style={pageStyle}>
      <div style={watermarkWrapperStyle}>
        <img src={logo} alt="Candi watermark" style={watermarkImageStyle} />
      </div>
      {/** Title removed as requested */}
      <div style={gridStyle}>
        {imgs.map((foto, idx) => {
          const colors = [
            { primary: "#db1c7c", secondary: "#e91e63", accent: "#f06292" }, // Chamarras - Pink
            { primary: "#2e7d32", secondary: "#388e3c", accent: "#4caf50" }, // Chalecos - Green
            { primary: "#1976d2", secondary: "#1e88e5", accent: "#42a5f5" }, // Pantalón - Blue
            { primary: "#00bcd4", secondary: "#26c6da", accent: "#4dd0e1" }, // Shorts - Cyan
            { primary: "#f57c00", secondary: "#ff9800", accent: "#ffb74d" }, // Puños - Orange
            { primary: "#7b1fa2", secondary: "#8e24aa", accent: "#ab47bc" },
            // Otros - Purple
          ];
          const color = colors[idx] || colors[0];

          return (
            <div
              key={idx}
              style={getCardStyle(idx)}
              onClick={() => handleClick(idx)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-2px) scale(1.01)";
                e.currentTarget.querySelector("img").style.transform =
                  "scale(1.02)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.querySelector("img").style.transform =
                  "scale(1)";
              }}
            >
              {/* overlay removed to avoid color change on hover */}
              <img src={foto} alt={titles[idx]} style={imgStyle} />
              <div style={getTitleStyle(idx)}>{titles[idx]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
