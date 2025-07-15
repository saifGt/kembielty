import { useState } from "react";
import NavBar from "../Components/NavBar";
import "../styles/WelcomePage.css";
export default function WelcomePage({ onLogout, userName }) {
  return (
    <div className="page-container">
      {/* NavBar pour utilisateurs connectés */}
      <NavBar onLogout={onLogout} userName={userName} />

      <section className="welcome-section">
        <div className="welcome-container">
          <div className="welcome-grid">
            {/* Contenu principal */}
            <div className="welcome-content">
              <div className="welcome-text">
                <h1 className="welcome-title">
                  Bienvenue sur <span className="welcome-brand">Kembialty</span>
                </h1>
                <div className="welcome-underline"></div>
                <p className="welcome-description">
Gérez vos lettres de change en ligne de manière simple, rapide et sécurisée.
Un chatbot intelligent est à votre disposition pour répondre instantanément à vos questions.
                </p>
              </div>
            </div>

            {/* Interface utilisateur */}
            <div className="welcome-interface">
              <div className="interface-card">
                {/* Section upload */}
                <div className="upload-section">
                  <div className="upload-icon">📄</div>
                  <div className="upload-inputs">
                    <input
                      type="text"
                      className="interface-input"
                      placeholder="....................."
                    />
                    <div className="input-row">
                      <input
                        type="text"
                        className="interface-input"
                        placeholder="....................."
                      />
                      <button className="search-button">🔍</button>
                    </div>
                  </div>
                </div>

                {/* Bouton principal */}
                <div className="action-section">
                  <button className="primary-action-btn">Traiter...</button>
                </div>

                {/* Icône de chat */}
                <div className="chat-section">
                  <div className="chat-icon">💬</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
