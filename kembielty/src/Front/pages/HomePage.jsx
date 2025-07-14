import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LoginPage from "./LoginPage";

import "../styles/Home.css";
import "../styles/Services.css";
import "../styles/Contact.css";

export default function HomePage() {
  const [activeCard, setActiveCard] = useState(0);
  const [showLogin, setShowLogin] = useState(false);

  const services = [
    {
      title: "Credits & Loans",
      description:
        "Importez facilement vos lettres de change au format PDF ou image depuis votre appareil.",
    },
    {
      title: "Analyse OCR",
      description:
        "Notre technologie reconnaît automatiquement les données clés de vos documents.",
    },
    {
      title: "Archivage sécurisé",
      description:
        "Sauvegardez et accédez à tout moment à vos lettres de change.",
    },
    {
      title: "Notifications intelligentes",
      description:
        "Recevez des alertes sur les échéances et événements importants.",
    },
  ];

  const contactMethods = [
    {
      icon: "📞",
      title: "Téléphone",
      description: "Appelez-nous directement",
    },
    {
      icon: "✉️",
      title: "Email",
      description: "Envoyez-nous un message",
    },
    {
      icon: "@",
      title: "Réseaux sociaux",
      description: "Suivez-nous en ligne",
    },
    {
      icon: "💬",
      title: "Chat en direct",
      description: "Discutez avec notre équipe",
    },
  ];

  return (
    <div className="homepage-container">
      {/* Header */}
      <Header
        onLoginClick={() => setShowLogin(true)}
        isLoginPage={showLogin}
        onBackToHome={() => setShowLogin(false)}
      />

      {showLogin ? (
        <LoginPage onBack={() => setShowLogin(false)} />
      ) : (
        <>

          <section id="accueil" className="hero-section">
            <div className="hero-container">
              <div className="hero-grid">
                <div className="hero-content">
                  <h1 className="hero-title">
                    Bienvenue sur <span className="hero-brand">Kembielty</span>
                  </h1>
                  <div className="hero-underline"></div>
                  <p className="hero-description">
                    La première plateforme numérique en Tunisie pour la gestion
                    intelligente des lettres de change
                  </p>
                  <button className="hero-button">En Savoir Plus</button>
                </div>

                <div className="hero-image-container">
                  <div className="hero-image-frame">
                    <img
                      src="image.jpg"
                      alt="Kembialty Platform"
                      className="hero-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Services */}
          <section id="services">
            <div className="services-hero">
              <div className="services-hero-overlay"></div>
              <div className="services-hero-text">
                <h2>
                  Gérez vos lettres de change de manière intelligente
                </h2>
                <p>
                  Kembielty vous permet de <strong>numériser</strong>,{" "}
                  <strong>consulter</strong> et{" "}
                  <strong>gérer efficacement</strong> vos lettres de change grâce
                  à une technologie avancée d'<strong>OCR</strong>.
                </p>
              </div>
            </div>

            <div className="services-section">
              <div className="services-container">
                <div className="services-header">
                  <h1 className="services-title">Nos Services</h1>
                  <div className="services-underline"></div>
                </div>

                <div className="services-grid">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`service-card ${
                        index === activeCard ? "service-card-active" : ""
                      }`}
                      onClick={() => setActiveCard(index)}
                    >
                      <div className="service-number">{index + 1}</div>
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pagination-dots">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCard(index)}
                      className={`pagination-dot ${
                        index === activeCard ? "pagination-dot-active" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section Contact */}
          <section id="contact">
            <div className="contact-hero">
              <div className="contact-hero-overlay"></div>
              <div className="contact-hero-content">
                <div className="contact-hero-container">
                  <div className="contact-methods-grid">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="contact-method-card">
                        <div className="contact-method-icon">{method.icon}</div>
                        <h3 className="contact-method-title">{method.title}</h3>
                        <p className="contact-method-description">
                          {method.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <h1 className="contact-title">Nos Contact</h1>
                  <div className="contact-underline"></div>
                </div>
              </div>
            </div>

            <div className="contact-info-section">
              <div className="contact-info-container">
                <div className="contact-info-grid">
                  <div className="contact-info-card">
                    <h3 className="contact-info-title">
                      Informations de contact
                    </h3>
                    <div className="contact-details">
                      <div className="contact-detail">
                        <span className="contact-icon">📍</span>
                        <div>
                          <p className="contact-label">Adresse</p>
                          <p className="contact-value">
                            25, Av. H Bourguiba - 3000 Tunis
                          </p>
                        </div>
                      </div>
                      <div className="contact-detail">
                        <span className="contact-icon">📞</span>
                        <div>
                          <p className="contact-label">Téléphone</p>
                          <p className="contact-value">70 00 000 004</p>
                        </div>
                      </div>
                      <div className="contact-detail">
                        <span className="contact-icon">✉️</span>
                        <div>
                          <p className="contact-label">Email</p>
                          <p className="contact-value">
                            contact@kembialty.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="contact-form-card">
                    <h3 className="contact-form-title">
                      Envoyez-nous un message
                    </h3>
                    <form className="contact-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">Nom complet</label>
                          <input
                            type="text"
                            className="form-input"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-input"
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Sujet</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Sujet de votre message"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Message</label>
                        <textarea
                          rows={6}
                          className="form-textarea"
                          placeholder="Votre message..."
                        ></textarea>
                      </div>
                      <button type="submit" className="form-submit">
                        Envoyer le message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
