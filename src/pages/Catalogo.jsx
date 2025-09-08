import React, { useRef } from "react";
import catalogoPdf from "../assets/CATALOGO  CANDI 2025.pdf";

const pageStyle = {
  background: "linear-gradient(180deg, #fff 0%, #ffe6f1 60%, #ffffff 100%)",
  padding: "24px 16px 48px",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const headerStyle = {
  textAlign: "center",
  margin: "8px 0 20px 0",
};

const titleStyle = {
  margin: 0,
  background: "linear-gradient(135deg, #db1c7c 0%, #e91e63 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontWeight: 900,
  fontSize: "2.2rem",
  letterSpacing: "1px",
  textTransform: "uppercase",
};

const subtitleStyle = {
  marginTop: "10px",
  color: "#7a244f",
  fontWeight: 500,
};

const cardStyle = {
  background: "#ffffff",
  borderRadius: "18px",
  boxShadow: "0 14px 40px #db1c7c40, 0 6px 18px #db1c7c26",
  border: "2px solid #db1c7c55",
  overflow: "hidden",
};

const toolbarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  padding: "12px 16px",
  background: "linear-gradient(135deg, #fff 0%, #ffe6f1 100%)",
  borderBottom: "1px solid #db1c7c22",
};

const actionsStyle = {
  display: "flex",
  gap: "10px",
};

const buttonStyle = {
  background: "#ffffff",
  color: "#db1c7c",
  border: "1px solid #db1c7c55",
  padding: "8px 12px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: 700,
  boxShadow: "0 2px 8px #db1c7c1a",
};

const badgeStyle = {
  color: "#db1c7c",
  fontWeight: 700,
};

const viewerWrapperStyle = {
  background: "#fafafa",
  padding: "12px",
};

const viewerStyle = {
  width: "100%",
  height: "78vh",
  border: "none",
  borderRadius: "12px",
  boxShadow: "inset 0 0 0 2px #db1c7c44",
};

function Catalogo() {
  const viewerRef = useRef(null);

  const handleFullscreen = () => {
    const element = viewerRef.current;
    if (element && element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>Catálogo</h1>
          <div style={subtitleStyle}>Explora nuestro catálogo completo en PDF</div>
        </div>

        <div style={cardStyle} ref={viewerRef}>
          <div style={toolbarStyle}>
            <div style={badgeStyle}>CANDI 2025</div>
            <div style={actionsStyle}>
              <a href={catalogoPdf} target="_blank" rel="noreferrer" style={{ ...buttonStyle, textDecoration: "none" }}>
                Abrir en pestaña
              </a>
              <a href={catalogoPdf} download style={{ ...buttonStyle, textDecoration: "none" }}>
                Descargar
              </a>
              <button onClick={handleFullscreen} style={buttonStyle}>
                Pantalla completa
              </button>
            </div>
          </div>

          <div style={viewerWrapperStyle}>
            {/* Native PDF viewers with graceful fallback */}
            <object data={catalogoPdf} type="application/pdf" style={viewerStyle}>
              <embed src={catalogoPdf} type="application/pdf" style={viewerStyle} />
              <p style={{ textAlign: "center", color: "#7a244f" }}>
                Tu navegador no pudo mostrar el PDF. Puedes
                {" "}
                <a href={catalogoPdf} target="_blank" rel="noreferrer" style={{ color: "#db1c7c", fontWeight: 700 }}>
                  abrirlo aquí
                </a>
                {" "}
                o descargarlo.
              </p>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogo;


