import { useState } from "react";
import NavBar from "../Components/NavBar";
import "../styles/Reclamation.css";

export default function Reclamation({ onLogout, userName }) {
  const [reclamationText, setReclamationText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Réclamation soumise:", reclamationText);
  };

  return (
    <div className="page-container">
      <NavBar />

      <section className="reclamation-section">
        <div className="reclamation-container">
          <div className="reclamation-card">
            <div className="reclamation-header">
              <h1 className="reclamation-title">
                Envoyez-nous une réclamation
              </h1>
              <div className="reclamation-underline"></div>
            </div>

            <form onSubmit={handleSubmit} className="reclamation-form">
              <div className="reclamation-textarea-container">
                <textarea
                  value={reclamationText}
                  onChange={(e) => setReclamationText(e.target.value)}
                  placeholder="Ecrire une réclamation ..."
                  className="reclamation-textarea-field"
                  rows={8}
                  required
                />
              </div>

              <div className="reclamation-submit-container">
                <button type="submit" className="reclamation-submit-btn">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
