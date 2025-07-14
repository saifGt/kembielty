import { useState } from "react";
import "../styles/Services.css";

export default function Services() {
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      title: "Credits & Loans",
      description:
        "Importez facilement vos lettres de change au format PDF ou image depuis votre appareil. Notre plateforme prend en charge différents formats pour un usage flexible",
    },
    {
      title: "Credits & Loans",
      description:
        "Importez facilement vos lettres de change au format PDF ou image depuis votre appareil. Notre plateforme prend en charge différents formats pour un usage flexible",
    },
    {
      title: "Credits & Loans",
      description:
        "Importez facilement vos lettres de change au format PDF ou image depuis votre appareil. Notre plateforme prend en charge différents formats pour un usage flexible",
    },
    {
      title: "Credits & Loans",
      description:
        "Importez facilement vos lettres de change au format PDF ou image depuis votre appareil. Notre plateforme prend en charge différents formats pour un usage flexible",
    },
  ];

  return (
    <div>
      {/* Hero Image */}
      <section className="services-hero">
        <img
          src="https://cdn.builder.io/api/v1/assets/e3b777963416473f85152ffdc1e5f65e/frame-8-ff9002?format=webp&width=800"
          alt="Business meeting"
          className="services-hero-image"
        />
        <div className="services-hero-overlay"></div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h1 className="services-title">Nos Services</h1>
            <div className="services-underline"></div>
          </div>

          {/* Services Cards */}
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card ${index === activeCard ? "service-card-active" : ""}`}
                onClick={() => setActiveCard(index)}
              >
                <div className="service-number">{index + 1}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="pagination-dots">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`pagination-dot ${index === activeCard ? "pagination-dot-active" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
