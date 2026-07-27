import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FiArrowRight, FiHeart, FiShoppingBag } from "react-icons/fi";
import "./Productos.css";

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
    <div className="productos-page">
      <div className="productos-watermark">
        <img src={logo} alt="Candi watermark" />
      </div>
      
      <div className="productos-header">
        <h1>Nuestra Colección</h1>
        <p>
          Descubre nuestra línea completa de uniformes diseñados con los más altos estándares de calidad y estilo
        </p>
      </div>
      
      <div className="productos-grid">
        {imgs.map((foto, idx) => {
          return (
            <div
              key={idx}
              className="product-card"
              onClick={() => handleClick(idx)}
            >
              <div className="product-card-img-container">
                <img src={foto} alt={titles[idx]} className="product-card-img" />
                <div className="img-overlay"></div>
                <div className="quick-actions">
                  <button 
                    className="action-button"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    title="Guardar"
                  >
                    <FiHeart size={18} />
                  </button>
                  <button 
                    className="action-button"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    title="Añadir"
                  >
                    <FiShoppingBag size={18} />
                  </button>
                </div>
              </div>
              
              <div className="product-card-content">
                <div className="product-card-meta">
                  <span className="meta-badge">{counts[idx]}</span>
                  <span className="meta-badge premium">Premium</span>
                </div>
                
                <h3 className="product-card-title">{titles[idx]}</h3>
                <p className="product-card-description">{descriptions[idx]}</p>
                
                <div className="product-card-footer">
                  <span className="view-details">Ver detalles</span>
                  <div className="view-button">
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
