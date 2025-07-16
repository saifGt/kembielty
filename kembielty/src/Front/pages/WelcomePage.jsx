import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Chatbot from "../Components/Chatbot"; 
import "../styles/WelcomePage.css";

export default function WelcomePage({ onLogout, userName }) {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) setUserId(id);
  }, []);

  return (
    <div className="page-container">
      <NavBar onLogout={onLogout} userName={userName} />
      <section className="welcome-section">
        <div className="welcome-container">
          <div className="welcome-grid">
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

 <div className="welcome-interface">
              <div className="interface-card">
                <div className="upload-section">
                  <div className="upload-icon">📄</div>
                  <div className="upload-inputs">
                    <input type="text" className="interface-input" placeholder="....................." />
                    <div className="input-row">
                      <input type="text" className="interface-input" placeholder="....................." />
                      <button className="search-button">🔍</button>
                    </div>
                  </div>
                </div>

                <div className="action-section">
                  <button className="primary-action-btn">Traiter...</button>
                </div>

                {/* Icône chat */}
                <div className="chat-section">
                  <div className="chat-icon" onClick={() => {
                    const iframe = document.querySelector("iframe[src*='chatbase']");
                    if (iframe) iframe.contentWindow.postMessage({ open: true }, "*");
                  }}>
                    💬
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {userId && <Chatbot userId={userId} />}
    </div>
  );
}
