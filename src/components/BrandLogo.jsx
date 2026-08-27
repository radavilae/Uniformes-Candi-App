import "./BrandLogo.css";
import logo from "../assets/logo.jpg";

const BrandLogo = ({ variant = "default", className = "" }) => {
  if (variant === "default") {
    return (
      <img
        src={logo}
        alt="CANDI"
        className={`brand-logo brand-logo-img brand-logo--${variant} ${className}`.trim()}
      />
    );
  }
  return (
    <span className={`brand-logo brand-logo--${variant} ${className}`.trim()}>
      CANDI
    </span>
  );
};

export default BrandLogo;
