import "./BrandLogo.css";

const BrandLogo = ({ variant = "default", className = "" }) => (
  <span className={`brand-logo brand-logo--${variant} ${className}`.trim()}>
    CANDI
  </span>
);

export default BrandLogo;
