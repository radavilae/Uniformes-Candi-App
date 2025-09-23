import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import catalogoPdf from "../assets/CATALOGOCANDI2025.pdf";

const pageStyle = {
  background: "#ffffff",
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
  boxShadow: "none",
  border: "2px solid #db1c7c55",
  overflow: "hidden",
};

const toolbarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  padding: "12px 16px",
  background: "#ffffff",
  borderBottom: "1px solid #eeeeee",
};

const actionsStyle = {
  display: "flex",
  gap: "16px",
  alignItems: "center",
};

const buttonStyle = {
  background: "#ffffff",
  color: "#333333",
  border: "2px solid #e0e0e0",
  width: "36px",
  height: "36px",
  padding: 0,
  borderRadius: "50%",
  cursor: "pointer",
  fontWeight: 400,
  boxShadow: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
};
// Keyframes will be injected into the page via a <style> tag in the component

const badgeStyle = {
  color: "#db1c7c",
  fontWeight: 700,
};

const tooltipStyle = {
  color: "#000000",
  fontWeight: 400,
  opacity: 0,
  transition: "opacity 0.2s ease",
  marginLeft: "8px",
};

const viewerWrapperStyle = {
  background: "#ffffff",
  padding: "12px",
};

const viewerStyle = {
  width: "100%",
  height: "62vh",
  border: "none",
  borderRadius: "12px",
  boxShadow: "none",
};

const fullscreenBackButtonStyle = {
  position: "absolute",
  top: "12px",
  left: "12px",
  background: "#ffffff",
  color: "#db1c7c",
  border: "1px solid #db1c7c55",
  padding: "6px 10px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: 800,
  fontSize: "1.2rem",
  zIndex: 10,
  boxShadow: "0 2px 8px #db1c7c1a",
};

function Catalogo() {
  const viewerRef = useRef(null);
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const handleFullscreen = () => {
    const element = viewerRef.current;
    if (element && element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(document.fullscreenElement === viewerRef.current);
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const handleExitAndBack = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen().catch(() => {});
    }
    navigate("/catalogo");
  };

  return (
    <div style={pageStyle}>
      <style>{`@keyframes candiBlink { 0%, 100% { box-shadow: 0 0 0 0 rgba(219,28,124,0.9); } 50% { box-shadow: 0 0 0 5px rgba(219,28,124,0); } }`}</style>
      <div style={containerStyle}>
        <div style={headerStyle}>
          {/* Title removed as requested */}
          <div style={subtitleStyle}>
            Explora nuestro catálogo completo en PDF
          </div>
        </div>

        <div style={cardStyle} ref={viewerRef}>
          {isFullscreen && (
            <button
              style={fullscreenBackButtonStyle}
              onClick={handleExitAndBack}
              aria-label="Volver a catálogo"
              title="Volver"
            >
              ←
            </button>
          )}
          <div style={toolbarStyle}>
            <div style={badgeStyle}>CANDI 2025</div>
            <div style={actionsStyle}>
              <div style={{display:'flex', alignItems:'center'}} onMouseEnter={()=>setHovered('open')} onMouseLeave={()=>setHovered(null)}>
                <a
                href={catalogoPdf}
                target="_blank"
                rel="noreferrer"
                style={{ ...buttonStyle, textDecoration: "none" }}
                title="Abrir en pestaña"
                aria-label="Abrir en pestaña"
                >+
                </a>
                <span style={{...tooltipStyle, opacity: hovered==='open'?1:0}}>Abrir</span>
              </div>
              <div style={{display:'flex', alignItems:'center'}} onMouseEnter={()=>setHovered('download')} onMouseLeave={()=>setHovered(null)}>
                <a
                href={catalogoPdf}
                download
                style={{ ...buttonStyle, textDecoration: "none" }}
                title="Descargar"
                aria-label="Descargar"
                >+
                </a>
                <span style={{...tooltipStyle, opacity: hovered==='download'?1:0}}>Descargar</span>
              </div>
              <div style={{display:'flex', alignItems:'center'}} onMouseEnter={()=>setHovered('full')} onMouseLeave={()=>setHovered(null)}>
                <button
                onClick={handleFullscreen}
                style={buttonStyle}
                title="Pantalla completa"
                aria-label="Pantalla completa"
                >+
                </button>
                <span style={{...tooltipStyle, opacity: hovered==='full'?1:0}}>Pantalla completa</span>
              </div>
            </div>
          </div>

          <div style={viewerWrapperStyle}>
            {/* Native PDF viewers with graceful fallback */}
            <object
              data={catalogoPdf}
              type="application/pdf"
              style={viewerStyle}
            >
              <embed
                src={catalogoPdf}
                type="application/pdf"
                style={viewerStyle}
              />
              <p style={{ textAlign: "center", color: "#7a244f" }}>
                Tu navegador no pudo mostrar el PDF. Puedes{" "}
                <a
                  href={catalogoPdf}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#db1c7c", fontWeight: 700 }}
                >
                  abrirlo aquí
                </a>{" "}
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
