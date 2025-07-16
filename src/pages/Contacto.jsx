import React from "react";
import candiContacto from "../assets/candi-contacto.jpg";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "60vh",
  background: "rgb(219,28,124)",
};

const textStyle = {
  textAlign: "center",
  maxWidth: "500px",
  color: "#fff",
};

const imageStyle = {
  maxWidth: "300px",
  marginBottom: "20px",
  borderRadius: "10px",
};

const iconContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "20px",
};
const iconStyle = {
  color: "#fff",
  fontSize: "2rem",
  cursor: "pointer",
  transition: "color 0.2s",
};

const Contacto = () => (
  <div style={containerStyle}>
    <div style={textStyle}>
      <img src={candiContacto} alt="Contacto" style={imageStyle} />
      <p>www.uniformescandi.com</p>
      <p>uniformescandiaguascalientes@gmail.com</p>
      <p>Tel. 449.916.65.34 / 449.916.34.01</p>
      <p>449.111.44.80</p>
      <p>Navarrete 1031 Fracc. San Marcos</p>
      <p>CP 20070 Aguascalientes Ags. México</p>
      <div style={iconContainerStyle}>
        <a href="https://www.facebook.com/uniformescandi/?locale=es_LA" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={iconStyle} />
        </a>
        <a href="https://www.instagram.com/reel/DICcqtLB7vF/" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={iconStyle} />
        </a>
        <a href="https://mx.pinterest.com/uniformescandiaguascalientes/" target="_blank" rel="noopener noreferrer">
          <FaPinterest style={iconStyle} />
        </a>
      </div>
    </div>
  </div>
);

export default Contacto;
