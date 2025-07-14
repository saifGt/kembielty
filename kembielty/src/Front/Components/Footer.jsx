import "./Footer.css";

export default function Footer() {
  const partners = [
    { name: "UIB", logo: "uib.png" },
    { name: "Attijari Bank", logo: "tijari.png" },
    { name: "BNA", logo: "bna.png" },
    { name: "Amen Bank", logo: "amen.png" },
    { name: "BIAT", logo: "biat.png" },
  ];

  return (
    <footer className="footer">
      <div className="partners-section">
        <div className="partners-container">
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-logo">
                <img src={partner.logo} alt={partner.name} className="partner-img" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title green">Kembielty</h3>
            <p className="footer-copyright">
              © 2024 All Rights Reserved | UIB
            </p>
            <div className="social-links">
              <div className="social-icon">
                <span>f</span>
              </div>
              <div className="social-icon">
                <span>@</span>
              </div>
              <div className="social-icon">
                <span>in</span>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="footer-section">
            <h3 className="footer-title">Useful Links</h3>
            <ul className="footer-list">
              <li>Présentation 1</li>
              <li>Présentation 2</li>
              <li>Présentation 3</li>
            </ul>
          </div>

          {/* Services List */}
          <div className="footer-section">
            <h3 className="footer-title">Services List</h3>
            <ul className="footer-list">
              <li>Présentation 1</li>
              <li>Présentation 2</li>
              <li>Présentation 3</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="footer-section">
            <h3 className="footer-title">Get in Touch</h3>
            <div className="contact-info">
              <p>25, Av. H Bourguiba - 3000 Tunis - Tél : 70 00 000 004</p>
              <p>E-mail :</p>
              <p className="location-link">📍 Voir localisation</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
