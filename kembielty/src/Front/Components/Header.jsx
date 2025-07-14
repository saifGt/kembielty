import "./Header.css";

export default function Header({ onLoginClick, isLoginPage, onBackToHome }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo-section">
            <a href="#" className="logo-link">
              <div className="logo-icon">
                <img src="logo2.png" alt="Logo" className="logo-text" />
              </div>
              <span className="brand-name">
                <span className="brand-green">KEMB</span>IELTY
              </span>
            </a>
          </div>

          <nav className="nav-desktop">
            <a
              href="#accueil"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                if (isLoginPage) {
                  onBackToHome();
                } else {
                  document.getElementById("accueil")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
            >
              Accueil
            </a>
            <a
              href="#services"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Services
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </a>

            {/* Afficher le bouton uniquement si ce n’est pas la page de login */}
            {!isLoginPage && (
              <button className="connect-button" onClick={onLoginClick}>
                Se Connecter
              </button>
            )}
          </nav>

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
