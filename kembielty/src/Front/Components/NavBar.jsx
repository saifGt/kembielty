import "../styles/WelcomePage.css";
import { useNavigate } from "react-router-dom";

export default function NavBar({ onLogout, userName = "User" }) {
  const navigate = useNavigate();

  
  const handleLogout = () => {
    localStorage.clear(); // ou localStorage.removeItem("role") etc.
    navigate("/"); // redirige vers la page de connexion
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-section">
            <a
              href="#"
              className="logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/welcome");
              }}
            >
              <div className="logo-icon">
                <img src="/logo2.png" alt="Logo" className="logo-text" />
              </div>
              <span className="brand-name">
                <span className="brand-green">KEMB</span>IALTY
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="nav-desktop">
            <a
              href="#accueil"
              className="nav-link nav-link-active"
              onClick={(e) => {
                e.preventDefault();
                navigate("/welcome");
              }}
            >
              Accueil
            </a>
            <a
              href="#upload"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/upload");
              }}
            >
              Upload
            </a>
            <a
              href="#historique"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/historique");
              }}
            >
              Historique
            </a>
            <a
              href="#reclamation"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/reclamation");
              }}
            >
              Réclamation
            </a>

            {/* Bouton de déconnexion */}
            <button className="disconnect-button" onClick={handleLogout}>
              Déconnecté
            </button>

            {/* Avatar utilisateur */}
            <div className="user-avatar">
              <button
                className="avatar-circle"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/profile");
                }}
              >
                <img
                  src="/utilisateur.png"
                  alt="icon utilisateur"
                  className="avatar-image"
                />
              </button>
            </div>
          </nav>

          {/* Menu mobile (icône hamburger) */}
          <div className="mobile-menu">
            <button className="mobile-button">
              <svg
                className="hamburger-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
