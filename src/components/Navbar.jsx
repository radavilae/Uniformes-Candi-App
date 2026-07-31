import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import BrandLogo from "./BrandLogo";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", label: "INICIO" },
    { path: "/nosotros", label: "QUIENES SOMOS" },
    { path: "/productos", label: "PRODUCTOS" },
    { path: "/catalogo", label: "CATÁLOGO" },
    { path: "/contacto", label: "CONTACTO" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-brand">
          <BrandLogo />
        </Link>

        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={location.pathname === item.path ? "active" : ""}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
