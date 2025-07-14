import { useState } from "react";
import NavBar from "../Components/NavBar";
import "../styles/DetailLettre.css";

export default function DetailLettre({ onLogout, userName }) {
  const lettreData = {
    rib: "123456789",
    nomAcheteur: "Saif Meddeb",
    dateCreation: "01/01/2025",
    dateEcheance: "01/03/2025",
    agentBancaire: "UIB",
    montant: "200000",
    currency: "DTN",
    lettreImage:
      "lettre.jpg",
  };

  return (
    <div className="page-container">
      <NavBar onLogout={onLogout} userName={userName} currentPage="detail" />

      <section className="detail-lettre-section">
        <div className="detail-lettre-container">
          <div className="detail-layout">
            {/* Image de la lettre */}
            <div className="lettre-image-container">
              <div className="lettre-image-background">
                <div className="lettre-image-wrapper">
                  <img
                    src={lettreData.lettreImage}
                    alt="Lettre de change"
                    className="lettre-image"
                  />
                </div>
              </div>
            </div>

            {/* Ligne de séparation */}
            <div className="detail-separator"></div>

            {/* Informations de la lettre */}
            <div className="lettre-info-container">
              <div className="lettre-info">
                <div className="info-field">
                  <span className="field-label">RIB</span>
                  <span className="field-separator">:</span>
                  <span className="field-value">{lettreData.rib}</span>
                </div>

                <div className="info-field">
                  <span className="field-label">Nom Acheteur</span>
                  <span className="field-separator">:</span>
                  <span className="field-value">{lettreData.nomAcheteur}</span>
                </div>

                <div className="info-field">
                  <span className="field-label">Date Creation</span>
                  <span className="field-separator">:</span>
                  <span className="field-value">{lettreData.dateCreation}</span>
                </div>

                <div className="info-field">
                  <span className="field-label">Date Écheance</span>
                  <span className="field-separator">:</span>
                  <span className="field-value">{lettreData.dateEcheance}</span>
                </div>

                <div className="info-field">
                  <span className="field-label">Agent bancaire</span>
                  <span className="field-separator">:</span>
                  <span className="field-value">
                    {lettreData.agentBancaire}
                  </span>
                </div>

                <div className="info-field montant-field">
                  <span className="field-label">Montant</span>
                  <span className="field-separator">:</span>
                  <div className="montant-container">
                    <span className="montant-value">{lettreData.montant}</span>
                    <span className="montant-currency">
                      {lettreData.currency}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
