import React, { useState } from "react";
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

const formWrapperStyle = {
  width: "100%",
  background: "#ffffff",
  padding: "24px 16px 48px",
  display: "flex",
  justifyContent: "center",
};

const formStyle = {
  width: "100%",
  maxWidth: "680px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "10px",
  border: "1px solid #e0e0e0",
  outline: "none",
  color: "#000000",
};

const textareaStyle = {
  gridColumn: "1 / -1",
  minHeight: "120px",
  padding: "12px 14px",
  borderRadius: "10px",
  border: "1px solid #e0e0e0",
  outline: "none",
  color: "#000000",
};

const submitStyle = {
  gridColumn: "1 / -1",
  padding: "12px 18px",
  borderRadius: "10px",
  border: "1px solid #e0e0e0",
  background: "#ffffff",
  color: "#000000",
  cursor: "pointer",
};

const formHeaderStyle = {
  textAlign: "center",
  margin: "24px 0 12px 0",
  color: "#000000",
  fontWeight: 700,
};

const Contacto = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const action = form.getAttribute("action");
    const formData = new FormData(form);
    try {
      await fetch(action, { method: "POST", body: formData, mode: "no-cors" });
      setSubmitted(true);
      form.reset();
    } catch (_) {
      setSubmitted(true);
    }
  };

  return (
  <>
    <div style={formWrapperStyle}>
      {submitted ? (
        <div style={{ maxWidth: "680px", textAlign: "center", color: "#000", fontSize: "1.1rem" }}>
          ¡Gracias, nos pondremos en contacto contigo lo antes posible!
        </div>
      ) : (
        <form
          style={formStyle}
          action="https://formsubmit.co/uniformescandiaguascalientes@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <h2 style={{ ...formHeaderStyle, gridColumn: '1 / -1' }}>Ponte en contacto con nosotros</h2>
          <input type="hidden" name="_subject" value="Nuevo mensaje desde Uniformes CANDI" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input style={inputStyle} type="text" name="name" placeholder="Nombre" required />
          <input style={inputStyle} type="email" name="email" placeholder="Email" required />
          <textarea style={textareaStyle} name="message" placeholder="Mensaje" required />
          <button style={submitStyle} type="submit">Enviar</button>
        </form>
      )}
    </div>
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
  </>
  );
};

export default Contacto;
