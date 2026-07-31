import React from "react";

const pageStyle = {
  background: "#ffffff",
  padding: "100px 24px 48px",
  minHeight: "80vh",
};

const containerStyle = {
  maxWidth: "720px",
  margin: "0 auto",
};

const titleStyle = {
  margin: "0 0 24px",
  background: "linear-gradient(135deg, #db1c7c 0%, #e91e63 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontWeight: 900,
  fontSize: "2.2rem",
  letterSpacing: "1px",
  textTransform: "uppercase",
};

const textStyle = {
  color: "#444",
  lineHeight: 1.8,
  fontSize: "1.05rem",
};

const Nosotros = () => (
  <div style={pageStyle}>
    <div style={containerStyle}>
      <h1 style={titleStyle}>¿Quiénes somos?</h1>
      <p style={textStyle}>
        GIAMATEX es una empresa mexicana fundada en 1980 en el estado de
        Aguascalientes. Estado del país que se ha distinguido por su industria textil.
        La tradición textil, el diseño como innovación y la tecnología de punta, apuntalan
        a la empresa hacia una consolidación a nivel nacional.
        <br /><br />
        Nuestro objetivo es ser una empresa fundada en los valores humanos y calidad
        de nuestros servicios.
        <br /><br />
        Este año 2025 la empresa celebra su 40 aniversario de fundación. Agradecemos
        a nuestros amigos, clientes y proveedores por su apoyo, esperamos seguir
        mejorando día a día.
        <br /><br />
        La empresa se consolida como una marca mexicana de la más alta calidad en
        sus productos. Nos interesa mucho la atención al cliente y hacia nuestros
        colaboradores al interior de la empresa. Esperamos seguir muchos años más
        ofreciendo soluciones de calidad a nuevos clientes en todo México.
      </p>
    </div>
  </div>
);

export default Nosotros;
